import { Sequelize } from "sequelize";

import sequelize from "../utils/database.js";

import User from "./user.js";
import Course from "./course.js";
import Lesson from "./lesson.js";

const Answer = sequelize.define("answers", {
  courseRef: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Course,
      key: "courseId",
    },
  },
  lessonRef: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Lesson,
      key: "lessonId",
    },
  },
  user: {
    type: Sequelize.STRING(30),
    primaryKey: true,
    allowNull: false,
    references: {
      model: User,
      key: "login",
    },
  },
});

export default Answer;
