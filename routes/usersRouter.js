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

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get('/:id', (req, res) =>{
  const id = req.params.id;
  const user = service.findOne(id);
  res.json(user);
});

//---------------------------------------

router.post('/', (req, res) =>{
  const body = req.body;
  const newUser = service.create(body)
  res.status(201).json(newUser);
});

//---------------------------------------

router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.json(user);
});

//---------------------------------------

router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.json(user);
});

//---------------------------------------

router.delete('/:id', (req, res) =>{
  const {id} = req.params;
  const respuesta = service.delete(id);
  res.json(respuesta);
});

module.exports = router;
