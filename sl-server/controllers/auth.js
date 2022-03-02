import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import User from "../models/user.js";
import CoursesAvailability from "../models/coursesAvailability.js";

const signup = (req, res, next) => {
  // checks if login already exists
  User.findOne({
    where: {
      login: req.body.login,
    },
  })
    .then((dbUser) => {
      if (dbUser) {
        return res.status(409).json({ message: "такой пользователь уже существует" });
      } else if (req.body.login && req.body.password) {
        // password hash
        bcrypt.hash(req.body.password, 12, (err, passwordHash) => {
          if (err) {
            return res.status(500).json({ message: "ошибка хэширования пароля" });
          } else if (passwordHash) {
            return User.create({
              login: req.body.login,
              passwordHash: passwordHash,
            })
              .then(() => {
                for (let i = 1; i <= 3; i++) {
                  CoursesAvailability.create({
                    user: req.body.login,
                    courseRef: i,
                  });
                }
              })
              .then(() => {
                res.status(200).json({ message: "пользователь создан" });
              })
              .catch((err) => {
                console.log(err);
                res.status(502).json({ message: "внутренняя ошибка сервера" });
              });
          }
        });
      } else if (!req.body.password) {
        return res.status(400).json({ message: "укажите пароль" });
      } else if (!req.body.login) {
        return res.status(400).json({ message: "укажите логин" });
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};

const login = (req, res, next) => {
  // checks if login exists
  User.findOne({
    where: {
      login: req.body.login,
    },
  })
    .then((dbUser) => {
      if (!req.body.password) {
        return res.status(400).json({ message: "укажите пароль" });
      } else if (req.body.login === "") {
        return res.status(400).json({ message: "укажите логин" });
      } else {
        if (!dbUser) {
          return res.status(404).json({ message: "такой пользователь не найден" });
        } else {
          // password hash
          bcrypt.compare(req.body.password, dbUser.passwordHash, (err, compareRes) => {
            if (err) {
              // error while comparing
              res.status(502).json({ message: "ошибка проверки пароля" });
            } else if (compareRes) {
              // password match
              const token = jwt.sign({ login: req.body.login }, "secret", { expiresIn: "24h" });
              res.status(200).json({ message: "пользователь авторизован", token: token, login: dbUser.login });
            } else {
              // password doesnt match
              res.status(401).json({ message: "неверные данные" });
            }
          });
        }
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};

const isAuth = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "not authenticated" });
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "secret");
  } catch (err) {
    return res.status(500).json({ message: err.message || "could not decode the token" });
  }
  if (!decodedToken) {
    res.status(401).json({ message: "unauthorized" });
  } else {
    res.status(200).json({ message: "here is your resource" });
  }
};

export { signup, login, isAuth };
