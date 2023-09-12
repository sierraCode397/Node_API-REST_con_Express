const express = require('express');
const router = express.Router();
const CategorieService = require('./../services/categorieServices');
const service = new CategorieService();



router.get('/', async (req, res) =>{
  const categories = await service.find();
  res.json(categories);
});

router.get('/:categorieId/products/:productsId', (req, res) =>{
  const { categorieId, productsId }= req.params;
  res.json({
    categorieId ,
    productsId,
  });
});

router.get('/:id', async (req, res) =>{
  const id = req.params.id;
  const categorie = await service.findOne(id);
  res.json(categorie);
});

//---------------------------------------

router.post('/', async (req, res) =>{
  const body = req.body;
  const newCategorie = await service.create(body)
  res.status(201).json(newCategorie);
});

//---------------------------------------

router.patch('/:id', async (req, res) =>{
  try {
    const {id} = req.params;
    const body = req.body;
    const categori = await service.update(id, body);
    res.json(categori);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

//---------------------------------------

router.patch('/:id', async (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const categorie = await service.update(id, body);
  res.json(categorie);
});

//---------------------------------------

router.delete('/:id', async (req, res) =>{
  const {id} = req.params;
  const respuesta = await service.delete(id);
  res.json(respuesta);
});

module.exports = router;
