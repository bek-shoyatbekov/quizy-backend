const { Schema, model } = require('mongoose');

const resultSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    quizId: {
        type: String,
        required: true
    },
    score: Number
}, {
    timestamps: true
});


module.exports = model('Result', resultSchema);