"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.post, {
        as: "posts",
        foreignKey: "userId",
      });
      user.belongsToMany(models.user, {
        as: "followers",
        through: "follower-user",
        foreignKey: "userId",
        otherKey: "followerId",
      });
      user.belongsToMany(models.role, {
        as: "roles",
        through: "user-role",
        foreignKey: "userId",
      });
      user.belongsToMany(models.like, {
        as: "likes",
        foreignKey: "userId"
      })
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.UUID,
      about: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "user",
    },
  );
  return user;
};
