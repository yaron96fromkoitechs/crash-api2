"use strict";
const bcrypt = require("bcrypt");
const { v4: uuidV4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      await Promise.all(
        Array.from(new Array(20)).map(async (_, index) => ({
          id: uuidV4(),
          username: `username${index}`,
          password: await bcrypt.hash(`password${index}`, 10),
          email: `example${index}@mail.com`,
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
      ),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
