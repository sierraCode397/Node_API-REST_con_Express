const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hola, es mi server de express ');
});

app.listen(port, () => {
  console.log(`Mi port 3000 Listening at http://localhost:${port}`);
});
