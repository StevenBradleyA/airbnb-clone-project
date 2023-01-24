'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Reviews";
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          userId: 1,
          review: "wow, this place was pog",
          stars: 5,
        },
        {
          spotId: 2,
          userId: 2,
          review: "wow, this place was pog",
          stars: 5,
        },
        {
          spotId: 3,
          userId: 3,
          review: "wow, this place was pog",
          stars: 5,
        },
        {
          spotId: 4,
          userId: 4,
          review: "wow, this place was pog",
          stars: 5,
        },
        {
          spotId: 5,
          userId: 5,
          review: "wow, this place was pog",
          stars: 5,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
