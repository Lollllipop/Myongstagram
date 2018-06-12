const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const asyncError = require('../../utils/async-error');
const db = require('../../models');

router.get('/', asyncError(async (req, res, next) => {
  const lastUserId = req.query.lastUserId
  const recentUserId = req.query.recentUserId
  const searchKeyword = req.query.searchKeyword
  const isSearching = req.query.isSearching
  let usersObjectList;


  if (isSearching === 'true') {
    if (lastUserId) {
      usersObjectList = await db.User.findAll({
        attributes: ['id', 'username'],
        order: [
          ['id', 'DESC'],
        ],
        limit: 10,
        where: {
          username: {
            [Op.or]: {
              [Op.eq]: searchKeyword,
              [Op.like]: `%${searchKeyword}%`,
            }
          },
          id: {
            [Op.lt]: lastUserId 
          }
        }
      });
    } else if (recentUserId) {
      usersObjectList = await db.User.findAll({
        attributes: ['id', 'username'],
        order: [
          ['id', 'DESC'],
        ],
        limit: 10,
        where: {
          username: {
            [Op.or]: {
              [Op.eq]: searchKeyword,
              [Op.like]: `%${searchKeyword}%`,
            }
          },
          id: {
            [Op.gt]: recentUserId 
          },
        }
      });
    } 
  } else {
    if (lastUserId) {
      usersObjectList = await db.User.findAll({
        attributes: ['id', 'username'],
        order: [
          ['id', 'DESC'],
        ],
        limit: 10,
        where: {
          id: {
            [Op.lt]: lastUserId 
          }
        }
      });
    } else if (recentUserId) {
      usersObjectList = await db.User.findAll({
        attributes: ['id', 'username'],
        order: [
          ['id', 'DESC'],
        ],
        limit: 10,
        where: {
          id: {
            [Op.gt]: recentUserId 
          }
        }
      });
    } else if (searchKeyword){
      usersObjectList = await db.User.findAll({
        attributes: ['id', 'username'],
        order: [
          ['id', 'DESC'],
        ],
        limit: 10,
        where: {
          username: {
            [Op.or]: {
              [Op.eq]: searchKeyword,
              [Op.like]: `%${searchKeyword}%`,
            }
          }
        }
      });
    } else {
      usersObjectList = await db.User.findAll({
        attributes: ['id', 'username'],
        order: [
          ['id', 'DESC'],
        ],
        limit: 10,
      });
    }
  }

  const users = usersObjectList.map((val, idx) => ({id: val.dataValues.id, username: val.dataValues.username}));

  res.send(users);
}));

module.exports = router;