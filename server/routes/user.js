const express = require('express');
const router = express.Router();
const asyncError = require('../utils/async-error');
const db = require('../models');

router.post('/', asyncError(async (req, res, next) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password
  }).then( user => {
    res.json(user.toJSON());
  }).catch( error => {
    if (error.name == 'SequelizeUniqueConstraintError') {
      return res.status(422).json({code: 101, message: 'username exists'});
    }
    next(error);
  });
}));

module.exports = router;