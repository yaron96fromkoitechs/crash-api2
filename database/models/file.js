"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class file extends Model {
    static associate(models) {
      file.belongsToMany(models.post, {
        through: "post-file",
        as: "posts",
        foreignKey: "fileId",
      });
      file.belongsToMany(models.user, {
        as: "users",
        foreignKey: "avatar",
      })
    }
  }
  file.init(
    {
      key: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "file",
    },
  );
  return file;
};
