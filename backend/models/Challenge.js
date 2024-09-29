// models/Challenge.js
const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    points: { type: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    completedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
