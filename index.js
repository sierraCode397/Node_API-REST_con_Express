const express = require('express');
const app = express();
const port = 3000;
const { faker } = require('@faker-js/faker');

app.get('/', (req, res) =>{
  res.send('Hola, es mi server de express ');
});

app.get('/nueva-ruta', (req, res) =>{
  res.send('Hola, Soy una nueva ruta o endPoint');
});

//------------------------------------

app.get('/products', (req, res) =>{
  const productos = [];
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

app.get('/products/filter', (req,res) =>{
  res.send('Yo soy un filtro');
});

app.get('/products/:productId', (req, res) =>{
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

/*
  app.get('/products/filter', (req,res) =>{
    res.send('Yo soy un filtro');
  });
*/

//------------------------------------

app.get('/categorie', (req, res) =>{
  res.json({
    1: 'Electronicos',
    2: 'Shose',
    3: 'Artesanal'
  });
});

app.get('/categorie/:categorieId/products/:productsId', (req, res) =>{
  const { categorieId, productsId }= req.params;
  res.json({
    categorieId ,
    productsId,
  });
});

//------------------------------------

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay parametros');
  }
});

app.listen(port, () => {
  //console.log(`Mi port 3000 Listening at http://localhost:${port}`);
});
