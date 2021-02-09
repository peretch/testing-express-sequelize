module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Products',
      [
        {
          id: 1,
          name: 'Guitar',
          price: 120,
          stock: 20,
          minStock: 10,
          createdAt: '2021-02-08 00:00:00',
          updatedAt: '2021-02-08 00:00:00',
        },
        {
          id: 2,
          name: 'Piano',
          price: 230,
          stock: 1,
          minStock: 2,
          createdAt: '2021-02-08 00:00:00',
          updatedAt: '2021-02-08 00:00:00',
        },
        {
          id: 3,
          name: 'Flute',
          price: 80,
          stock: 4,
          minStock: 4,
          createdAt: '2021-02-08 00:00:00',
          updatedAt: '2021-02-08 00:00:00',
        },
      ],
      {}
    ),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Products', null, {}),
};
