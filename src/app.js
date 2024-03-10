const express = require('express');
const morgan = require('morgan');
const expressSession = require('express-session');
const cors = require('cors');

const quizRouter = require('./routes/quiz.routes.js');
const userRouter = require('./routes/user.routes.js');
const resultRouter = require('./routes/quiz-result.routes.js');
const errorHandler = require('./utils/error/error-handler.js');
const configs = require('./configs/index.js');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(expressSession({
    secret: configs.sessionSecret,
    resave: false,
    saveUninitialized: false
}));

app.use(cors());

app.use('/api/v1', quizRouter);
app.use('/api/v1', userRouter);
app.use("/api/v1", resultRouter);


app.use(errorHandler)

module.exports = app;