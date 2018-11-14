'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    header_id: DataTypes.INTEGER,
    is_from_sender: DataTypes.BOOLEAN,
    content: DataTypes.TEXT,
    read: DataTypes.BOOLEAN
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
    Message.belongsTo(models.Header);
  };
  return Message;
};