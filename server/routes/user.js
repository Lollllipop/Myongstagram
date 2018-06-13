const express = require('express');
const bcrypt = require('bcrypt');
const axios = require('axios');
const router = express.Router();
const asyncError = require('../utils/async-error');
const db = require('../models');

router.post('/', asyncError(async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const password_digest = await bcrypt.hash(req.body.password, salt);

  db.User.create({
    username: req.body.username,
    password: password_digest,
    email: req.body.email
  }).then( user => {
    res.send('Successfully created user');
  }).catch( error => {
    if (error.name == 'SequelizeUniqueConstraintError') {
      return res.status(422).json({code: 101, message: 'username exists'});
    }
    next(error);
  });
}));

router.get('/', asyncError(async (req, res, next) => {
  const user = await db.User.findOne({where: {username: req.query.username}});
  if (user) {
    res.status(422).send('username exists');
  } else {
    res.send(true);
  }
}));

module.exports = router;