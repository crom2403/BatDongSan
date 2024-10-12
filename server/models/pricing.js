"use strict"
const { Model } = require("sequelize")
const { enumData } = require("../utils/constants")
module.exports = (sequelize, DataTypes) => {
  class Pricing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pricing.init(
    {
      name: {
        type: DataTypes.ENUM,
        values: enumData.pricings,
      },
      isDisplayImmedialy: DataTypes.BOOLEAN,
      levelShowDescription: DataTypes.FLOAT,
      priority: DataTypes.INTEGER,
      requireScore: DataTypes.INTEGER,
      requiredScoreNextLevel: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      expiredDay: DataTypes.BIGINT,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pricing",
    }
  )
  return Pricing
}
