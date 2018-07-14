const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const authConfig = require('./auth-config');
const db = require('../models');

module.exports = function(passport) {
  const facebookCallbackURL = (process.env.NODE_ENV == 'production') 
    ? 'https://event-register-web-project.herokuapp.com/auth/facebook/callback' 
    : 'http://localhost:3000/auth/facebook/callback';

  // jwt 
  passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 토큰을 header로 부터 추출
    secretOrKey: authConfig.jwtSecret,
  }, async (jwt_payload, done) => {
    try {
      const user = await db.User.findOne({ where: { id: jwt_payload.id } });

      if (user) {
        if (jwt_payload.exp - jwt_payload.iat > 86400) { // 86400
          return done(null, false, { message: 'Expired token' })
        }
        return done(null, user, { message: 'Valid token' });
      } else {
        return done(null, false, { message: 'Invalid token' });
      }
    } catch(err) {
      return done(err, false, { message: 'Invalid token' });
    }
  }));

  // local
  passport.use(new LocalStrategy({
  /**
   * 첫번째 인자로 주는 것은 해당 html의 값들의 name과 우리가 사용하고자 하는 변수들의 매칭 작업
   * 첫번째 인자를 안줘도 되긴 함 옵션임
   */
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, username, password, done) => {
    try {
      const user = await db.User.findOne({ where: { username: username } });

        /**
         * done() : 인증 성공 후 넘겨주는 함수
         * @param {Object} user - user에 해당할 사용자에 대한 정보
         * @param {Object} message - info에 해당할 간단한 메시지
         */
      if (user) {
        if (user.password && await user.validatePassword(password)) {
          return done(null, user, { message: 'Login success' });
        } else {
          return done(null, false, { message: 'Incorrect password' })
        }
      }
      return done(null, false, { message: 'Incorrect username' });
    } catch(err) {
      return done(err);
    }
  }));

  // TODO: 완성 해야 함
  // facebook
  passport.use(new FacebookStrategy({
      clientID : '1054847684669181',
      clientSecret : '1c936ba68ee6ed782224d7ebd44950a9',
      callbackURL : facebookCallbackURL,
      profileFields : ['email', 'name', 'picture'] // profile 값으로 들어와야 될 정보를 표시
    }, async (accesstoken, refreshToken, profile, done) => { // 페이스북이 profile 정보를 전달해줌
      console.log(1);
        // try {
        //   console.log(profile);
        //   //profile로 넘어온 계정 파싱 코드
        //   var email = (profile.emails && profile.emails[0]) ? profile.emails[0].value : '';
        //   var picture = (profile.photos && profile.photos[0]) ? profile.photos[0].value : '';
        //   var name = (profile.displayName) ? profile.displayName : 
        //     [profile.name.givenName, profile.name.middleName, profile.name.familyName]
        //       .filter(e => e).join(' ');

        //   // 같은 facebook id를 가진 사용자가 있나?
        //   var user = await User.findOne({'facebook.id': profile.id});

        //   if (!user) {
        //     // 없다면, 혹시 같은 email이라도 가진 사용자가 있나?
        //     if (email) {
        //       user = await User.findOne({email: email});
        //     }
        //     if (!user) {
        //       // 그것도 없다면 새로 만들어야지.
        //       user = new User({name: name});
        //       user.email =  email ? email : `__unknown-${user._id}@no-email.com`; // 페이스북 사용자의 이메일이 없는 경우도 있기 때문에
        //     }
        //     // facebook id가 없는 사용자는 해당 id를 등록
        //     user.facebook.id = profile.id;
        //     user.facebook.photo = picture;
        //   }

        //   user.facebook.token = profile.token;
        //   await user.save();
        //   return done(null, user);
        // } catch (err) {
        //   done(err);
        // }
    })
  );
};