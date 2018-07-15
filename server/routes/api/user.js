const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const asyncError = require('../../utils/async-error');
const db = require('../../models');

router.get('/', asyncError(async (req, res, next) => {
  const accessToken = req.headers.authorization.split(' ')[1];
  const decoded = jwt.decode(accessToken);
  const user = await db.User.findById(decoded.id);
  const toBeOutUser = user.toJSON();
  res.json(toBeOutUser);
}));


router.get('/:id', function(req, res, next) { // 자신 말고 다른 사람들의 프로필 가져올 때
  res.json({'a': 3});
});

module.exports = router;