const { default: mongoose } = require('mongoose');
const QuizModel = require('../models/quiz.model');

class QuizController {

    async add(req, res, next) {
        try {
            let { quiz } = req.body;
            const { userId } = req.session.user;
            console.log("New quiz ", quiz);
            if (!quiz) {
                return res.status(400).send({ message: 'Quiz is required' });
            }

            quiz = Object.assign(quiz, { owner: userId });

            const result = await QuizModel.create(quiz);
            console.log("Quiz save result ", result);
            res.status(200).send({ message: 'Quiz added successful' });
            return;
        } catch (err) {
            next(err);
        }
    }
    async getAll(req, res, next) {
        try {
            const result = await QuizModel.find();
            res.status(200).send({ message: 'Get all quizes', data: result });
            return;
        } catch (err) {
            next(err);
        }
    }

    async getById(req, res, next) {
        try {
            const { quizId } = req.query;
            console.log("Quiz id", quizId);
            const result = await QuizModel.findById({ _id: new mongoose.Types.ObjectId(quizId) });
            if (!result) {
                return res.status(400).send({ message: 'Quiz not found' });
            }
            console.log("Quiz result ", result);
            res.status(200).send({ message: 'Get quiz by id', data: result });
            return;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new QuizController();
