'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    neighborhood: {
      type: DataTypes.ENUM,
      values: ['richmond', 'sunset', 'north beach', 'cole valley', 'pacific heights']
    },
    genres: DataTypes.ARRAY(DataTypes.STRING),
    instruments: DataTypes.ARRAY(DataTypes.STRING),
    experience: {
      type: DataTypes.ENUM,
      values: ['novice', 'intermediate', 'advanced', 'expert']
    },
    avatar_url: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Header);
  };
  return User;
};