// Entry point for the application
// Load environment variables from .env
require('dotenv').config();

// Import core modules
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route to test API
app.get('/', (req, res) => {
  res.send('API is running...');
});

const taskRoutes = require('./routes/taskRoutes');

app.use('/api/tasks', taskRoutes);




// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection failed:', error.message);
  });
