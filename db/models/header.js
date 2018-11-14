'use strict';
module.exports = (sequelize, DataTypes) => {
  const Header = sequelize.define('Header', {
    from_id: DataTypes.INTEGER,
    to_id: DataTypes.INTEGER
  }, {});
  Header.associate = function(models) {
    // associations can be defined here
    Header.belongsTo(models.User);
  };
  return Header;
};