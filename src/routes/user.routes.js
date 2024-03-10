const { Router } = require("express");

const router = Router();

const userController = require('../controllers/user.controller.js');
const authMiddleware = require("../middlewares/auth.js");


router.post('/login', authMiddleware, userController.login);

router.get('/check-user', authMiddleware, userController.checkUserExisting);



module.exports = router;
