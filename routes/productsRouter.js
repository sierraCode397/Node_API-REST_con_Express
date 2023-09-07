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
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

//--------------------------------

//O PUT
router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

//--------------------------------

router.put('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

//--------------------------------

router.delete('/:id', (req, res) =>{
  const {id} = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
