// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = require('../config');

const authMiddleware = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
        const decoded = jwt.verify(token.split(' ')[1], JWT_SECRET); // Ensure to split the token if it's "Bearer token"
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;  // Ensure this line is present
