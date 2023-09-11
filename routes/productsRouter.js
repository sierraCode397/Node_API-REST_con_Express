const express = require('express');
const router = express.Router();
const ProductsServices = require('./../services/productService');
const service = new ProductsServices();
//--------------------------------

router.get('/', async (req, res) =>{
  const products = await service.find();
  res.json(products);
});


router.get('/filter', (req,res) =>{
  res.send('Yo soy un filtro');
});


router.get('/:productId', async(req, res, next) =>{
  try {
    const id = req.params.productId;
    //const { id } = req.params;  es lo mismo de arriba
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

/*
  router.get('/products/filter', (req,res) =>{
    res.send('Yo soy un filtro');
  });
*/

//--------------------------------

router.post('/', async (req, res) =>{
  const body = req.body;
  const newProduct = await service.create(body)
  res.status(201).json(newProduct);
});

//--------------------------------

//O PUT
router.patch('/:id', async (req, res) =>{
  try {
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

//--------------------------------

router.put('/:id', async (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json(product);
});

//--------------------------------

router.delete('/:id', async (req, res) =>{
  const {id} = req.params;
  const respuesta = await service.delete(id);
  res.json(respuesta);
});

module.exports = router;
