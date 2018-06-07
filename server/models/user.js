'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
    // 이 부분 해쉬 하는 것은 받을 때 하는게 좋을듯
  }, {});

  User.associate = function(models) {
    // associations can be defined here
  };
  
  User.prototype.validatePassword = function(password) {
    return bcrypt.compare(password, this.password_digest); // 비교해서 true/false를 반환
  };

  User.prototype.toJSON = function() {
    var values = Object.assign({}, this.get());
    return values;
  };
  
  return User;
};
