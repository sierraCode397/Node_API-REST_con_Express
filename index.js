const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hola, es mi server de express ');
});

app.get('/nueva-ruta', (req, res) =>{
  res.send('Hola, Soy una nueva ruta o endPoint');
});

app.get('/productos', (req, res) =>{
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    },
  ]);
});

app.get('/categorie', (req, res) =>{
  res.json({
    1: 'Electronicos',
    2: 'Shose',
    3: 'Artesanal'
  });
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

app.get('/categorie/:categorieId/products/:productsId', (req, res) =>{
  const { categorieId, productsId }= req.params;
  res.json({
    categorieId ,
    productsId,
  });
});

app.listen(port, () => {
  //console.log(`Mi port 3000 Listening at http://localhost:${port}`);
});
