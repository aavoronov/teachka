import sequelize from "../utils/database.js";

const getCourses = async (req, res, next) => {
  try {
    let data = await sequelize.query(
      `SELECT courseId, courseName, courseThumbnail, user FROM courses INNER JOIN coursesavailabilities ON courseRef = courseId WHERE user = '${req.body.login}';`,
      { type: sequelize.QueryTypes.SELECT }
    );
    for (var item of data) {
      let overallTemp = await sequelize.query(
        `SELECT COUNT(*) AS count FROM lessons 
        INNER JOIN courses ON courseRef = courseId
        WHERE courseRef = ${item.courseId};`,
        { type: sequelize.QueryTypes.SELECT }
      );
      let completeTemp = await sequelize.query(
        `SELECT COUNT(*) AS count FROM answers 
        WHERE courseRef = ${item.courseId} AND user = '${req.body.login}';`,
        { type: sequelize.QueryTypes.SELECT }
      );
      item.overall = overallTemp[0].count;
      item.complete = completeTemp[0].count;
    }

    console.log(JSON.stringify(data));
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};

export { getCourses };
