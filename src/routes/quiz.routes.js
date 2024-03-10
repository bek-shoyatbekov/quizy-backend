const { Router } = require("express");

const router = Router();

const authMiddleware = require("../middlewares/auth.js");
const quizController = require("../controllers/quiz.controller.js")


router.get('/quiz/single', authMiddleware, quizController.getById);

router.post('/quiz', authMiddleware, quizController.add);

router.get("/quiz/all", quizController.getAll);




module.exports = router;