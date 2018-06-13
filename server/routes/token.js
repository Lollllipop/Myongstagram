const express = require('express');
const router = express.Router();
const asyncError = require('../utils/async-error');
const db = require('../models');

module.exports = function(app) {
  const options = {
    accessTokenLifetime: 9999999999,
    refreshTokenLifetime: 9999999999
  }

  router.post('/', app.oauth.token(options));
  return router;
};
