const express = require('express');
const router = express.Router();
const CategorieService = require('./../services/categorieServices');
const service = new CategorieService();



router.get('/', (req, res) =>{
  const categories = service.find();
  res.json(categories);
});

router.get('/:categorieId/products/:productsId', (req, res) =>{
  const { categorieId, productsId }= req.params;
  res.json({
    categorieId ,
    productsId,
  });
});

router.get('/:id', (req, res) =>{
  const id = req.params.id;
  const categorie = service.findOne(id);
  res.json(categorie);
});

//---------------------------------------

router.post('/', (req, res) =>{
  const body = req.body;
  const newCategorie = service.create(body)
  res.status(201).json(newCategorie);
});

//---------------------------------------

router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const categorie = service.update(id, body);
  res.json(categorie);
});

//---------------------------------------

router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const categorie = service.update(id, body);
  res.json(categorie);
});

//---------------------------------------

router.delete('/:id', (req, res) =>{
  const {id} = req.params;
  const respuesta = service.delete(id);
  res.json(respuesta);
});

module.exports = router;
