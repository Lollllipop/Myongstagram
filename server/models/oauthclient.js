'use strict';
module.exports = (sequelize, DataTypes) => {
  var OAuthClient = sequelize.define('OAuthClient', {
    clientId: DataTypes.STRING,
    clientSecret: DataTypes.STRING,
    redirectUri: DataTypes.STRING
  }, {});
  OAuthClient.associate = function(models) {
    // associations can be defined here
  };
  return OAuthClient;
};