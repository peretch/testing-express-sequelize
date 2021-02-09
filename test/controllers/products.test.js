const chai = require('chai');
const request = require('supertest');
const { server } = require('../../app');

const { expect } = chai;

const shouldNotRestockProduct = {
  id: 1,
  name: 'Guitar',
  price: 120,
  stock: 20,
  minStock: 10,
  createdAt: '2021-02-08T00:00:00.000Z',
  updatedAt: '2021-02-08T00:00:00.000Z',
  shouldRestock: 'no',
};
const shouldRestockProduct = {
  id: 2,
  name: 'Piano',
  price: 230,
  stock: 1,
  minStock: 2,
  createdAt: '2021-02-08T00:00:00.000Z',
  updatedAt: '2021-02-08T00:00:00.000Z',
  shouldRestock: 'yes',
};
const shouldShortlyStockProduct = {
  id: 3,
  name: 'Flute',
  price: 80,
  stock: 4,
  minStock: 4,
  createdAt: '2021-02-08T00:00:00.000Z',
  updatedAt: '2021-02-08T00:00:00.000Z',
  shouldRestock: 'shortly',
};

describe('Fetch products test', async () => {
  it('Shows all stock states', async () => {
    const { body, status } = await request(server).get('/products');
    const { data } = body;
    expect(status).to.equal(200);
    expect(data).to.deep.include(shouldNotRestockProduct);
    expect(data).to.deep.include(shouldRestockProduct);
    expect(data).to.deep.include(shouldShortlyStockProduct);
  });
});
