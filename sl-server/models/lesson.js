import { Sequelize } from "sequelize";

import sequelize from "../utils/database.js";

import Course from "../models/course.js";

const Lesson = sequelize.define("lessons", {
  lessonId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  lessonName: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  lessonDesc: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  courseRef: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Course,
      key: "courseId",
    },
  },
});

export default Lesson;
