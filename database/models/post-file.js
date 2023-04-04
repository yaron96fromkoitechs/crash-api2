"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class postFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  postFile.init(
    {
      postId: DataTypes.UUID,
      fileId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "post-file",
    },
  );
  return postFile;
};
