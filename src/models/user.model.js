const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userId: String,
    email: String,
    score: Number
}, {
    timestamps: true
});


module.exports = model('User', userSchema);