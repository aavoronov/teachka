import { Sequelize } from "sequelize";

import sequelize from "../utils/database.js";
import User from "./user.js";

const Ticket = sequelize.define("supporttickets", {
  ticketId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  supportticketText: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  supportticketDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  user: {
    type: Sequelize.STRING(30),
    allowNull: false,
    references: {
      model: User,
      key: "login",
    },
  },
});

export default Ticket;
