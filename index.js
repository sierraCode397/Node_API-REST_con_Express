const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hola, es mi server de express ');
});

app.get('/nueva-ruta', (req, res) =>{
  res.send('Hola, Soy una nueva ruta o endPoint');
});

routerApi(app);

app.listen(port, () => {
  //console.log(`Mi port 3000 Listening at http://localhost:${port}`);
});
