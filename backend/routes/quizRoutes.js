const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Add question
router.post('/add', async (req, res) => {
    try {
        const quiz = new Quiz(req.body);
        await quiz.save();
        res.json({ message: "Question Added" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all questions
router.get('/quiz', async (req, res) => {
    try {
        const data = await Quiz.find();
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;