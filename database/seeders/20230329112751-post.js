"use strict";
const { v4: uuidV4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.select(null, "users");
    return queryInterface.bulkInsert(
      "posts",
      Array.from(new Array(20)).map((_, index) => ({
        id: uuidV4(),
        userId: users[index].id,
        text: `texttexttext${index}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
