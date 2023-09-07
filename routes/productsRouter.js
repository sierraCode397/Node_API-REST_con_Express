const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

router.get('/', (req, res) =>{
  const productos = [];
  //Uso de faker
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),

    });
  }
  res.json(productos);
});

router.get('/filter', (req,res) =>{
  res.send('Yo soy un filtro');
});

router.get('/:productId', (req, res) =>{
    const id = req.params.productId;
  //const { id } = req.params;  es lo mismo de arriba
  res.json(
    {
      id,
      name: 'Product 2',
      price: 2000,
    }
  );
});
"https://loremflickr.com/640/480?lock=7979798060072960"
/*
  router.get('/products/filter', (req,res) =>{
    res.send('Yo soy un filtro');
  });
*/

router.post('/', (req, res) =>{
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  })
});


module.exports = router;
