var express = require('express');
var router = express.Router();
var auth = require('../utils/auth');
var characters_db = require('../db/mongodb');
var users_db = require('../db/users')

router.get('/', auth.ensureToken, auth.verfiyToken, async (req, res, next) => {
  user = await users_db.getUserByUsername(req.authData.data.username);
  try {
    let filter = '';
    if (user.role === 'gm') {
      filter = null;
    } else if (user.role === 'player') {
      filter = { active: true }
    }
    Characters = await characters_db.getCharacters(filter);
    res.status(200).json(Characters);
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
});

router.get('/:id', auth.ensureToken, auth.verfiyToken, async (req, res, next) => {
  try {
    const character = await characters_db.getCharacterById(req.params.id)
    res.status(200).json(character);
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
});

router.post('/', auth.ensureToken, auth.verfiyToken, async (req, res, next) => {
  try {
    const newCharacter = await characters_db.createCharacter(req.body);
    console.log('2');
    res.status(201).json(newCharacter);
    console.log('3');
  } catch (err) {
    res.status(400)
  }
});

router.put('/:id', auth.ensureToken, auth.verfiyToken, async (req, res, next) => {
  try {
    const character = await characters_db.updateCharacter(req.params.id, req.body)
    res.status(200).json(character);
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
});

router.delete('/', auth.ensureToken, auth.verfiyToken, async (req, res, next) => {
  res.send("Delete all? no way!")
});

router.delete('/:id', auth.ensureToken, auth.verfiyToken, async (req, res, next) => {
  try {
    const character = await characters_db.deleteCharacter(req.params.id)
    res.status(200).json(character);
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;
