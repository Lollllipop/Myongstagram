const express = require('express');
const router = express.Router();
const asyncError = require('../../utils/async-error');
const db = require('../../models');

router.get('/', asyncError(async (req, res, next) => {
  const userToken = req.headers.authorization.split(' ')[1];
  const targetedTokenRow = await db.OAuthToken.findOne({where: {accessToken: userToken}});
  const userId = targetedTokenRow.dataValues.userId
  const user = await db.User.findById(userId);

  delete user.dataValues.password;
  res.json(user.dataValues);
}));


router.get('/:id', function(req, res, next) { // 자신 말고 다른 사람들의 프로필 가져올 때
  console.log('req!! : ',req.headers.authorization);
  // sequelize find 필요! 토큰을 이용해서
  // res.render('index', { title: 'Myonstgram API Server' });
});

module.exports = router;