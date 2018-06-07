const express = require('express');
const router = express.Router();
const asyncError = require('../utils/async-error');
const db = require('../models');

module.exports = function(app) {
  router.post('/', app.oauth.token());
  return router;
};