const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const asyncError = require('../../utils/async-error');
const db = require('../../models');

router.get('/', asyncError(async (req, res, next) => {
  const lastPostId = req.query.lastPostId
  const recentPostId = req.query.recentPostId
  let postsObjectList;

  if (lastPostId) {
    postsObjectList = await db.Post.findAll({
      include: [{
        model: db.User,
        attributes: ['username']
      }],
      order: [
        ['id', 'DESC'],
      ],
      limit: 10,
      where: {
        id: {
          [Op.lt]: lastPostId 
        }
      }
    });
  } else if (recentPostId) {
    postsObjectList = await db.Post.findAll({
      include: [{
        model: db.User,
        attributes: ['username']
      }],
      order: [
        ['id', 'DESC'],
      ],
      limit: 10,
      where: {
        id: {
          [Op.gt]: recentPostId 
        }
      },
    });
  } else {
    postsObjectList = await db.Post.findAll({
      include: [{
        model: db.User,
        attributes: ['username']
      }],
      order: [
        ['id', 'DESC'],
      ],
      limit: 10,
    });
  }

  const posts = postsObjectList.map((val, idx) => ({
      id: val.dataValues.id, 
      username: val.dataValues.User.dataValues.username,
      userId: val.dataValues.UserId,
      content: val.dataValues.content,
    }
  ));

  res.send(posts);
}));

router.get('/:id', function(req, res, next) { // 자신 말고 다른 사람들의 프로필 가져올 때
  console.log('req!! : ',req.headers.authorization);
  // sequelize find 필요! 토큰을 이용해서
  // res.render('index', { title: 'Myonstgram API Server' });
});

module.exports = router;