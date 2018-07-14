const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');
const authConfig = require('./auth-config');

const SECRET = authConfig.jwtSecret;
const REFRESH_TOKEN_VALID_PERIOD = 2629743; // 한달
const OPTIONS = {
  expiresIn: '1d',
  issuer: 'myongstagram',
}

module.exports = {
  getAccessToken: (payload, options = OPTIONS) => {
    return jwt.sign(payload, SECRET, options);
  },
  getRefreshToken: () => {
    return randomstring.generate();
  },
  getRefreshTokenExpiration: () => {
    const currentEpochTime = Math.round(new Date().getTime()/1000.0);

    return currentEpochTime + REFRESH_TOKEN_VALID_PERIOD;
  }
};
