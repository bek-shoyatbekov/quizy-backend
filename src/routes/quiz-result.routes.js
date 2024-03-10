const { Router } = require("express");

const router = Router();

const authMiddleware = require("../middlewares/auth.js");
const quizResultController = require("../controllers/quiz-result.controller.js");


router.post('/result', authMiddleware, quizResultController.add);

router.get('/result/single', authMiddleware, quizResultController.getByUserId);


router.get("/results", quizResultController.getAll);




module.exports = router;