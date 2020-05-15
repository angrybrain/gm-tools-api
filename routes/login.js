var express = require('express');
var db = require('../db/users');
var auth = require('../utils/auth');
var router = express.Router();


router.post('/', async (req, res, next) => {
  try {
    const login = req.body.login;
    const password = req.body.password;

    const user = await db.getUserByUsername(login);

    if (user != null && await auth.comparePassword(password, user.password)) {

      const userData = {
        _id: user.id,
        username: user.username,
        role: user.role,
        characterList: user.characterList
      }

      const token = await auth.createToken(userData, '1h');

      return res.status(200).json({ token: token });
    };

    return res.status(401).json({ success: false });
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

module.exports = router;
