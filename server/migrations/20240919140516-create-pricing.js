"use strict"

const { enumData } = require("../utils/constants")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pricings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.ENUM,
        values: enumData.pricings,
      },
      isDisplayImmedialy: {
        type: Sequelize.BOOLEAN,
      },
      levelShowDescription: {
        type: Sequelize.FLOAT,
      },
      priority: {
        type: Sequelize.INTEGER,
      },
      requireScore: {
        type: Sequelize.INTEGER,
      },
      requiredScoreNextLevel: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.BIGINT,
      },
      expiredDay: {
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pricings")
  },
}
