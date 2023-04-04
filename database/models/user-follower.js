"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userFollower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userFollower.init(
    {
      userId: DataTypes.UUID,
      followerId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "user-follower",
    },
  );
  return userFollower;
};
