import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sl_db", "root", "s111111", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false,
  },
});

export default sequelize;
