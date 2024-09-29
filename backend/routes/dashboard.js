const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware'); // Import your auth middleware here if needed
const router = express.Router();

// Protected dashboard route
router.get('/', authMiddleware, (req, res) => {
    res.send('Welcome to the Dashboard!'); // This can be replaced with dashboard logic or data
});

module.exports = router;
