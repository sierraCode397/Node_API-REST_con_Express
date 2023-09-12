const express = require('express');
const router = express.Router();
const UserServices = require('./../services/userService');
const service = new UserServices();

/*
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay parametros');
  }
});
*/

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});

router.get('/:id', async (req, res) =>{
  const id = req.params.id;
  const user = await service.findOne(id);
  res.json(user);
});

//---------------------------------------

router.post('/', async (req, res) =>{
  const body = req.body;
  const newUser = await service.create(body)
  res.status(201).json(newUser);
});

//---------------------------------------

router.patch('/:id', async (req, res) =>{
  try {
    const {id} = req.params;
    const body = req.body;
    const user = await service.update(id, body);
    res.json(user);
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
  const user = await service.update(id, body);
  res.json(user);
});

//---------------------------------------

router.delete('/:id', async (req, res) =>{
  const {id} = req.params;
  const respuesta = await service.delete(id);
  res.json(respuesta);
});

module.exports = router;
