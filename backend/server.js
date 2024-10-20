require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Training Scenarios Route
app.get('/api/training-scenarios', (req, res) => {
  const scenarios = [
    { id: 1, name: 'SQL Injection Basics' },
    { id: 2, name: 'Phishing Email Analysis' }
  ];
  res.json(scenarios);
});

// User Profile Route
app.get('/api/user-profile', (req, res) => {
  const user = {
    name: 'Sirine',
    points: 1200,
    badges: ['Beginner', 'SQL Expert']
  };
  res.json(user);
});

const trainingScenarios = [
    { 
      id: 1, 
      name: 'Introduction to React',
      description: 'Learn the basics of React, including components, state, and props.',
      objectives: ['Understand the fundamentals of React', 'Create a simple React application'],
      materials: ['Computer', 'Text Editor', 'React Documentation']
    },
    { 
      id: 2, 
      name: 'Advanced JavaScript Concepts',
      description: 'Dive deeper into JavaScript with advanced concepts like closures, promises, and async/await.',
      objectives: ['Master advanced JavaScript techniques', 'Write efficient and asynchronous code'],
      materials: ['Computer', 'Text Editor', 'JavaScript Documentation']
    },
    { 
      id: 3, 
      name: 'Understanding Redux',
      description: 'Learn how to manage state in your applications using Redux.',
      objectives: ['Grasp the principles of Redux', 'Integrate Redux into a React application'],
      materials: ['Computer', 'Text Editor', 'Redux Documentation']
    },
    { 
      id: 4, 
      name: 'Responsive Web Design',
      description: 'Learn to create web pages that look great on all devices.',
      objectives: ['Understand responsive design principles', 'Apply media queries and flexible layouts'],
      materials: ['Computer', 'Text Editor', 'CSS Documentation']
    },
    { 
      id: 5, 
      name: 'Node.js Fundamentals',
      description: 'Get started with backend development using Node.js.',
      objectives: ['Set up a Node.js environment', 'Build a simple server'],
      materials: ['Computer', 'Text Editor', 'Node.js Documentation']
    },
  ];
  
// Endpoint to get training scenarios
app.get('/api/training-scenarios', (req, res) => {
  res.json(trainingScenarios);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
