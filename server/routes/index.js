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

router.get('/test', asyncError(async (req, res, next) => {
  const test = await db.Post.findAll({
    include: [{
      model: db.User,
      attributes: ['username']
    }]
  });
  console.log(test[0].dataValues);
  res.send('success!!');
}));

module.exports = router;