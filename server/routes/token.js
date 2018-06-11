const express = require('express');
const router = express.Router();
const asyncError = require('../utils/async-error');
const db = require('../models');

module.exports = function(app) {
  // 토큰 만기의 필요성을 아직 못느끼므로 무기한 토큰 제공
  const options = {
    accessTokenLifetime: 9999999999,
    refreshTokenLifetime: 9999999999
  }
  router.post('/', app.oauth.token(options));
  return router;
};