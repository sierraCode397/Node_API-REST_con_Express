const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) =>{
    const data = req[property];
    //req[property] en globa todos los datos por parte de usuario como los siguientes
    //req.body
    //req.params
    //req.query
    const {error} = schema.validate(data, { abortEarly: false }); //Aqui se optiene un error en caso de que la validacion falle
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
