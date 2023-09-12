const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const {logErrors, errorHandler, boomErrorHander} = require('./middlewares/error.handler');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/api', (req, res) =>{
  res.send('Hola, es mi server de express ');
});

const whiteList = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin : (origin, callback)=> {
    if(whiteList.includes(origin) || !origin){
      callback(null , true);
    }else {
      callback(new Error('No permitido'));

    }
  }
}
app.use(cors(options));

app.get('/api/nueva-ruta', (req, res) =>{
  res.send('Hola, Soy una nueva ruta o endPoint');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHander);
app.use(errorHandler);

app.listen(port, () => {
  //console.log(`Mi port 3000 Listening at http://localhost:${port}`);
});
