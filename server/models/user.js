'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    refreshToken: DataTypes.STRING,
    refreshTokenExpiration: DataTypes.STRING,
  }, {});

  User.associate = (models) => {
    User.hasMany(models.Post);
  };
  
  User.prototype.validatePassword = function(password) {
    return bcrypt.compare(password, this.password); // 비교해서 true/false를 반환
  };

  User.prototype.toJSON = function() {
    var values = Object.assign({}, this.get());
    
    delete values.password; // password 외부 유출 막음
    return values;
  };
  
  return User;
};
