import { Sequelize } from "sequelize";

import sequelize from "../utils/database.js";

import User from "../models/user.js";
import Course from "../models/course.js";

const CoursesAvailability = sequelize.define("coursesAvailability", {
  courseRef: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Course,
      key: "courseId",
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

export default CoursesAvailability;
