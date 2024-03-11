const QuizResultModel = require('../models/quiz-result.model');

class QuizResultController {

    async add(req, res, next) {
        try {
            const { quiz: { quizId, score } } = req.body;
            const { userId } = req.user;
            if (!quizId) {
                return res.status(400).send({ message: 'QuizId are required' });
            }
            const newQuizResult = {
                userId,
                quizId,
                score
            }
            const result = await QuizResultModel.create(newQuizResult);

            res.status(200).send({ message: 'Quiz added successful' });
            return;
        } catch (err) {
            next(err);
        }
    }
    async getAll(req, res, next) {
        try {
            const { sort } = req.query;
            let sortQuery = {};

            if (sort) {
                sortQuery = { [sort]: 1 };
            }
            const results = await QuizResultModel.find({}, null, { sort: sortQuery });
            res.status(200).send({ message: 'Get all quizes', data: results });
            return;
        } catch (err) {
            next(err);
        }
    }

    async getByUserId(req, res, next) {
        try {
            const { userId } = req.user;

            const results = await QuizResultModel.find({ userId });
            res.status(200).send({ message: 'Get all quizes', data: results });
            return;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new QuizResultController();
