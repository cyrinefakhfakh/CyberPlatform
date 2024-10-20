const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Optional for CORS handling
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const scenarioRoutes = require('./routes/scenarioRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  });

// Routes
app.use('/api/users', userRoutes);
app.use('/api/scenarios', scenarioRoutes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
