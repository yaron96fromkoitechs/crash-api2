"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userRole.init(
    {
      id: DataTypes.UUID,
      userId: DataTypes.UUID,
      roleId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "user-role",
    },
  );
  return userRole;
};
