const express = require('express');
const router = express.Router();
const asyncError = require('../../utils/async-error');
const db = require('../../models');

router.post('/', asyncError(async (req, res, next) => {
  await db.Post.create({
    content: req.body.content,
    UserId: req.body.userId,
  })

  res.send('Successfully create post');
}));

router.get('/:id', function(req, res, next) { // 자신 말고 다른 사람들의 프로필 가져올 때
  console.log('req!! : ',req.headers.authorization);
  // sequelize find 필요! 토큰을 이용해서
  // res.render('index', { title: 'Myonstgram API Server' });
});

module.exports = router;