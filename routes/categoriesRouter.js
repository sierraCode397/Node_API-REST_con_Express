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

module.exports = router;
