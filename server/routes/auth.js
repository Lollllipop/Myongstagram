const express = require('express');
const router = express.Router();
const passport = require('passport');

const asyncError = require('../utils/async-error');
const tokenGenerator = require('../utils/token-generator');
const db = require('../models');

router.post('/', asyncError(async (req, res, next) => { // 로그인
  /**
   * passport.authenticate() 실행 => 
   * passport-config.js 파일의 해당 strategy 작동 =>
   * 미들웨어인 (err, user, info) => {} 실행
   */
  passport.authenticate('local', { session: false }, asyncError(async (err, user, info) => { // mobile app 이므로 Redirect 안하므로 custom callback
      if (err || !user) {
        return res.status(401).json({
            message: info.message
        });
      } else {
        const payload = user.toJSON();
        const accessToken = tokenGenerator.getAccessToken(payload);
        const refreshToken = tokenGenerator.getRefreshToken();
        const refreshTokenExpiration = tokenGenerator.getRefreshTokenExpiration();

        await user.update({
          refreshToken: refreshToken,
          refreshTokenExpiration: refreshTokenExpiration,
        })
        
        const toBeOutUser = user.toJSON();

        return res.json({ 
          message: info.message,
          toBeOutUser, 
          accessToken, 
        });
      }
    }
  ))(req, res, next);
}));

router.post('/token', asyncError(async (req, res, next) => { // 만기시 access token 재발행 로직
  try {
    const refreshToken = req.body.refreshToken; // refresh token은 body로 넘길 것
    const user = await db.User.findOne({ where: { refreshToken: refreshToken } });
    const currentEpochTime = Math.round(new Date().getTime()/1000.0);
    const refreshTokenExpiration = user.refreshTokenExpiration;

    if (currentEpochTime > refreshTokenExpiration) { // 클라이언트측에서 로그아웃 시키고 재로그인 시켜야 함
      res.send('Expired refreshtoken');
    } else {
      const payload = user.toJSON();
      const accessToken = tokenGenerator.getAccessToken(payload);
      res.json({
        message: 'Successfully reauthenticated',
        accessToken
      });
    }
  } catch(err) { // 유저 없을시
    res.send('Invalid refreshtoken');
  }
}));

router.get('/facebook', passport.authenticate('facebook', { scope : 'email' }));

// TODO: 완성 해야 함
router.get('/facebook/callback', asyncError(async (req, res, next) => {
  passport.authenticate('facebook', { session: false }, asyncError(async (err, user, info) => {
    console.log(err, user, info);
  }))(req, res, next);
}));

module.exports = router;
