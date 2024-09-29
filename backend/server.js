// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const challengeRoutes = require('./routes/challenges');
const dashboardRoutes = require('./routes/dashboard'); // Ensure this is included
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;  // Change 5000 to 3000 or any other available port
  // Ensure you define PORT

console.log('Starting server...'); // Add this line

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
      console.log('MongoDB connected');
      app.listen(PORT, () => {
          console.log(`Server is running on http://localhost:${PORT}`);
      });
  })
  .catch(err => console.log(err));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/dashboard', dashboardRoutes); // Ensure this line is included
