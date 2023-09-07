const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
  res.json({
    1: 'Electronicos',
    2: 'Shose',
    3: 'Artesanal'
  });
});

router.get('/:categorieId/products/:productsId', (req, res) =>{
  const { categorieId, productsId }= req.params;
  res.json({
    categorieId ,
    productsId,
  });
});

//---------------------------------------

router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});
//---------------------------------------

router.put('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

//---------------------------------------

router.delete('/:id', (req, res) =>{
  const {id} = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
