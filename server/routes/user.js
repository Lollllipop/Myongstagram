const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const asyncError = require('../utils/async-error');
const db = require('../models');

router.post('/', asyncError(async (req, res, next) => {
  const body = req.body.body;

  const salt = await bcrypt.genSalt(10);
  const password_digest = await bcrypt.hash(body.password, salt);

  db.User.create({
    username: body.username,
    password: password_digest,
    email: body.email
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
  const response = user ? true : false
  res.send(response);
}));

module.exports = router;