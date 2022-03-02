import jwt from "jsonwebtoken";
import sequelize from "../utils/database.js";

import Course from "../models/course.js";
import Lesson from "../models/lesson.js";

const getLessons = (req, res, next) => {
  try {
    sequelize.query(
      `SELECT courseId, courseName, courseThumbnail, user FROM courses INNER JOIN coursesavailabilities ON courseRef = courseId WHERE user = '${req.body.login}';`,
      { type: sequelize.QueryTypes.SELECT }
    );

    Lesson.findAll()
      .then((data) => {
        console.log(JSON.stringify(data));
        return res.status(200).json(data);
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

export { getLessons };
