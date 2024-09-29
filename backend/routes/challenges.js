// routes/challenges.js
const express = require('express');
const Challenge = require('../models/Challenge');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Get all challenges
router.get('/', async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.status(200).json(challenges);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Create a challenge
router.post('/', authMiddleware, async (req, res) => {
    const { title, description, points } = req.body;
    const newChallenge = new Challenge({ title, description, points, createdBy: req.user.id });

    try {
        await newChallenge.save();
        res.status(201).json(newChallenge);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Complete a challenge
router.post('/:id/complete', authMiddleware, async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if (!challenge) return res.status(404).json({ error: 'Challenge not found' });

        if (!challenge.completedBy.includes(req.user.id)) {
            challenge.completedBy.push(req.user.id);
            await challenge.save();
        }

        res.status(200).json(challenge);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
