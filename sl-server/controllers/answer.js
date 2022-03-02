import jwt from "jsonwebtoken";
import sequelize from "../utils/database.js";

import Course from "../models/course.js";
import Lesson from "../models/lesson.js";

const answer = async (req, res, next) => {
  try {
    const [results, metadata] = await sequelize
      .query(`INSERT INTO answers VALUES (${req.body.courseId}, ${req.body.lessonId}, '${req.body.user}')`)
      .then((results) => {
        return res.status(200).json(results);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred",
        });
      });
  } catch (err) {
    console.log(err);
  }
};

export { answer };
