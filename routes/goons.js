var express = require('express');
var router = express.Router();
var auth = require('../utils/auth');
var goons_db = require('../db/mongodb');
var users_db = require('../db/users')

router.get('/', auth.ensureToken, auth.verfiyToken, async (req, res, next) => {
  user = await users_db.getUserByUsername(req.authData.data.username);
  console.log(user)
  try {
    let filter = '';
    if (user.role === 'gm') {
      filter = null;
    } else if (user.role === 'player') {
      filter = { _id: user.characterList[0] }
    }
    goons = await goons_db.getGoons(filter);
    res.status(200).json(goons);
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
});

router.get('/:id', auth.ensureToken, auth.verfiyToken, async (req, res, next) => {
  try {
    const goon = await goons_db.getGoonById(req.params.id)
    res.status(200).json(goon);
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
});

router.post('/', auth.ensureToken, auth.verfiyToken, async (req, res, next) => {
  try {
    const newGoon = await goons_db.createGoon(req.body)
    res.status(201).json(newGoon)
  } catch (err) {
    res.status(400)
  }
});

router.put('/:id', auth.ensureToken, auth.verfiyToken, async (req, res, next) => {
  try {
    const goon = await goons_db.updateGoon(req.params.id, req.body)
    res.status(200).json(goon);
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
    const goon = await goons_db.deleteGoon(req.params.id)
    res.status(200).json(goon);
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;
