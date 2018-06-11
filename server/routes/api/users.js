const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const asyncError = require('../../utils/async-error');
const db = require('../../models');

router.get('/', asyncError(async (req, res, next) => {
  const lastId = req.query.lastId
  let usersObjectList;
  
  if (lastId) {
    usersObjectList = await db.User.findAll({
      attributes: ['username'],
      order: [
        ['id', 'DESC'],
      ],
      limit: 10,
      where: {
        id: {
          [Op.lt]: lastId 
        }
      }
    });
  } else {
    usersObjectList = await db.User.findAll({
      attributes: ['username'],
      order: [
        ['id', 'DESC'],
      ],
      limit: 10,
    });
  }

  const users = usersObjectList.map((val, idx) => val.dataValues.username)

  res.send(users);
}));

module.exports = router;