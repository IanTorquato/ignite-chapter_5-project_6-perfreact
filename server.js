/* eslint-disable no-plusplus */

module.exports = () => {
  const data = { products: [] };

  for (let index = 0; index < 1000; index++) {
    data.products.push({
      id: index + 1,
      price: Math.round(Math.random() * 8000),
      title: `Produto ${index + 1}`,
    });
  }

  return data;
};
