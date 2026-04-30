const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model('Quiz', QuizSchema);