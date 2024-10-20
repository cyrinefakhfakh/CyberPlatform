const express = require('express');
const Scenario = require('../models/Scenario');
const router = express.Router();

// Obtenir tous les scénarios
router.get('/', async (req, res) => {
  try {
    const scenarios = await Scenario.find();
    res.json(scenarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ajouter un nouveau scénario
router.post('/', async (req, res) => {
  const { title, description, type, difficulty, points } = req.body;
  try {
    const newScenario = new Scenario({ title, description, type, difficulty, points });
    await newScenario.save();
    res.status(201).json(newScenario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
