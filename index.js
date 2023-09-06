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
  res.json({
    name: 'Product 1',
    price: 1000,
  });
});

app.get('/categoria', (req, res) =>{
  res.json({
    1: 'Electronicos',
    2: 'Shose',
    3: 'Artesanal'

  });
});

app.listen(port, () => {
  console.log(`Mi port 3000 Listening at http://localhost:${port}`);
});
