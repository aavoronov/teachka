import jwt from "jsonwebtoken";

import Course from "../models/course.js";
import Answer from "../models/answer.js";
import sequelize from "../utils/database.js";
import CoursesAvailability from "../models/coursesAvailability.js";

const getCourseInner = async (req, res, next) => {
  try {
    let data = await sequelize.query(`SELECT * FROM courses WHERE courseId ='${req.body.courseId}';`, {
      type: sequelize.QueryTypes.SELECT,
    });
    // console.log(JSON.stringify(data));

    let overallTemp = await sequelize.query(`SELECT COUNT(*) AS count FROM lessons WHERE courseRef = ${req.body.courseId};`, {
      type: sequelize.QueryTypes.SELECT,
    });
    let completeTemp = await sequelize.query(
      `SELECT COUNT(*) AS count FROM answers WHERE courseRef = ${req.body.courseId} AND user = '${req.body.login}'`,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    data[0].overall = overallTemp[0].count;
    data[0].complete = completeTemp[0].count;

    let lessons = await sequelize.query(`SELECT * from lessons where courseRef = ${req.body.courseId};`, {
      type: sequelize.QueryTypes.SELECT,
    });
    for (let item of lessons) {
      let isCompleteTemp = await sequelize.query(
        `SELECT COUNT(*) as count from answers WHERE lessonRef = ${item.lessonId} AND user = '${req.body.login}';`,
        {
          type: sequelize.QueryTypes.SELECT,
        }
      );
      item.isComplete = isCompleteTemp[0].count;
    }
    data[0].lessons = lessons;
    // console.log(JSON.stringify(lessons));

    console.log(JSON.stringify(data));
    return res.status(200).json(data);

    // Course.findAll()
    // .then((data) => {
    //   for (var item in data) {
    //     // console.log(item, (data[item].courseWhatever = "text"));
    //     data[item].complete = 10;

    //     data[item].overall = sequelize.query(
    //       `SELECT * FROM lessons
    //       INNER JOIN courses ON courseRef = courseId
    //       WHERE courseRef = ${data[item].courseId};`,
    //       { type: sequelize.QueryTypes.SELECT }
    //     );
    //     console.log(temp);
    //     console.log(data[item].overall);
    //   }
    // })
    // .then((data) => {
    //   console.log(JSON.stringify(data));
    //   return res.status(200).json(data);
    // })
    // .catch((err) => {
    //   res.status(500).send({
    //     message: err.message || "Some error occurred",
    //   });
    // });
  } catch (err) {
    console.log(err);
  }
};

export { getCourseInner };
