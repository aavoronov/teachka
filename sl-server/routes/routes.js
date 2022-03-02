import express from "express";
import { signup, login, isAuth } from "../controllers/auth.js";
import { support } from "../controllers/support.js";
import { getCourses } from "../controllers/courses.js";
import { getCourseInner } from "../controllers/courseInner.js";
import { answer } from "../controllers/answer.js";
import { getLessons } from "../controllers/lessons.js";

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.get("/private", isAuth);

router.post("/support", support);

router.post("/courses", getCourses);

router.post("/course", getCourseInner);

router.post("/answer", answer);

router.get("/public", (req, res, next) => {
  res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use("/", (req, res, next) => {
  res.status(404).json({ error: "page not found" });
});

export default router;
