const UserModel = require('../models/user.model');

class UserController {

    async login(req, res, next) {
        try {
            const { userId, email } = req.session.user;
            const { method } = req.query;
            console.log("Login ", userId, email);
            if (!userId || !email) {
                return res.status(400).send({ message: 'Email and UserId are required' });
            }

            const isExistingUser = await UserModel.findOne({ userId });
            if (method === "login" && isExistingUser) {
                return res.status(200).send({ message: 'Login successful' });
            }

            const result = await UserModel.create({ userId, email });
            console.log("Login result ", result);
            res.status(200).send({ message: 'Login successful' });
            return;
        } catch (err) {
            next(err);
        }
    }
    async checkUserExisting(req, res, next) {
        try {
            const { userId } = req.session.user;
            const result = await UserModel.findOne({ userId });
            if (!result) {
                return res.status(400).send({ message: 'User not found' });
            }
            res.status(200).send({ message: 'User found' });
            return;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new UserController();