const { Schema, model } = require('mongoose');

const quizSchema = new Schema({
    title: { type: String, required: true },
    imageUrl: { type: String },
    questions: [{
        text: { type: String, required: true },
        options: [{ type: String, required: true }],
        timeLimit: { type: Number, required: true },
        correctAnswer: { type: Number, required: true },
    }],
    owner: String,
}, {
    timestamps: true
});


module.exports = model('Quiz', quizSchema);