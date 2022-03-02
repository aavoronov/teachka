import jwt from "jsonwebtoken";

import Ticket from "../models/ticket.js";

const support = (req, res, next) => {
  const record = Ticket.create({
    supportticketText: req.body.supportText,
    supportticketDate: req.body.datetime,
    user: req.body.user,
  })
    .then((record) => {
      if (record) {
        return res.status(200).json({ message: "сообщение отправлено" });
      } else {
        return res.status(500).json({ message: "внутренняя ошибка сервера" });
      }
    })

    .catch((err) => {
      console.log("error", err);
    });
};

export { support };
