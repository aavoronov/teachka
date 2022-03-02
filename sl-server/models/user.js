import { Sequelize } from "sequelize";

import sequelize from "../utils/database.js";

const User = sequelize.define("users", {
  login: {
    type: Sequelize.STRING(30),
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  passwordHash: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
});

export default User;
