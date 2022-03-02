import { Sequelize } from "sequelize";

import sequelize from "../utils/database.js";

const Course = sequelize.define("courses", {
  courseId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  courseName: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  courseThumbnail: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  courseDesc: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

export default Course;
