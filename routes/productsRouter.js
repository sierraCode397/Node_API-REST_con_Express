const express = require('express');
const router = express.Router();
const ProductsServices = require('./../services/productService');
const service = new ProductsServices();
//--------------------------------

router.get('/', (req, res) =>{
  const products = service.find();
  res.json(products);
});


router.get('/filter', (req,res) =>{
  res.send('Yo soy un filtro');
});


router.get('/:productId', (req, res) =>{
  const id = req.params.productId;
  //const { id } = req.params;  es lo mismo de arriba
  const product = service.findOne(id);
  res.json(product);
});

/*
  router.get('/products/filter', (req,res) =>{
    res.send('Yo soy un filtro');
  });
*/

//--------------------------------

router.post('/', (req, res) =>{
  const body = req.body;
  const newProduct = service.create(body)
  res.status(201).json(newProduct);
});

//--------------------------------

//O PUT
router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

//--------------------------------

router.put('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

//--------------------------------

router.delete('/:id', (req, res) =>{
  const {id} = req.params;
  const respuesta = service.delete(id);
  res.json(respuesta);
});

module.exports = router;
