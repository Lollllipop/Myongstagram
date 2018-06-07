const db = require('../models');
const m = {};

m.getClient = async function(clientId, clientSecret) {
  let params = { clientId: clientId };
  if (clientSecret) {
    params.clientSecret = clientSecret;
  }
  const result = await db.OAuthClient.findOne({ where: params });
  
  if (!result) {
    return null;
  }
  return {
    id: result.clientId,
    redirectUris: [result.redirectUri],
    grants: ['password', 'refresh_token']
  };
};

/**
 * password grant type에만 사용되는 함수로 
 * password grant type의 특성상 user의 id,pw를 관리하게 되므로 있는 함수임
 */
m.getUser = async function(username, password) {
  const user = await db.User.findOne({where: {username: username}});
  if (!user) {
    return null;
  }
  if (await user.validatePassword(password)) {
    return user;
  } else {
    return null;
  }
};

/**
 * token() 미들웨어 사용시 호출이 된다.
 * 역할 : 유저에게 토큰 발행 
 */
m.saveToken = async function(token, client, user) {
  const promises = [
    db.OAuthToken.create({
      accessToken: token.accessToken,
      expiresAt: token.accessTokenExpiresAt,
      scope: token.scope,
      clientId: client.id,
      userId: user.id,
    }),
    db.OAuthRefreshToken.create({
      refreshToken: token.refreshToken,
      expiresAt: token.refreshTokenExpiresAt,
      scope: token.scope,
      clientId: client.id,
      userId: user.id,
    })
  ];
  const [accessToken, refreshToken] = await Promise.all(promises);
  return {
    accessToken: accessToken.accessToken,
    accessTokenExpiresAt: accessToken.expiresAt,
    refreshToken: refreshToken.refreshToken,
    refreshTokenExpiresAt: refreshToken.expiresAt,
    scope: accessToken.scope,
    client: { id: accessToken.clientId },
    user: { id: accessToken.userId }
  };
};

/**
 * authenticate() 미들웨어 사용시 호출이 된다.
 * 역할 : 토큰 검증 및 해당 토큰과 관련된 유저의 정보 리턴
 */
m.getAccessToken = async function (accessToken) {
  const token = await db.OAuthToken.findOne({ 
    where: { accessToken: accessToken } 
  });
  if (!token) {
    return null;
  }
  return {
    accessToken: token.access_token,
    accessTokenExpiresAt: token.expiresAt,
    scope: token.scope,
    client: { id: token.clientId },
    user: { id: token.userId }
  };
};

module.exports = m;