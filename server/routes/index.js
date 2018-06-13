const express = require('express');
const router = express.Router();

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const asyncError = require('../utils/async-error');
const db = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Myonstgram API Server' });
});

router.post('/testUsers', asyncError(async (req, res, next) => {
  const testUsers = await axios.get('https://randomuser.me/api/?results=100&inc=login,email');
  testUsers.data.results.forEach((val, idx) => {
    db.User.create({
      username: val.login.username,
      password: val.login.sha1, // password를 해싱한 것
      email: val.email
    }).catch( error => {
      if (error.name == 'SequelizeUniqueConstraintError') {
        return res.status(422).json({code: 101, message: 'username exists'});
      }
      next(error);
    });
  });

  res.send('Successfully created users');
}));

router.post('/testPosts', asyncError(async (req, res, next) => {
  for(var i = 1; i <= 100; i++){
    db.Post.create({
      content: 'test content',
      UserId: i, // password를 해싱한 것
    }).catch( error => {
      if (error.name == 'SequelizeUniqueConstraintError') {
        return res.status(422).json({code: 101, message: 'post exists'});
      }
      next(error);
    });
  }

  res.send('Successfully created posts');
}));

module.exports = router;