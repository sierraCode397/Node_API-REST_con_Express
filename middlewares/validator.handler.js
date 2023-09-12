const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) =>{
    const data = req[property];
    //req[property] en globa todos los datos por parte de usuario como los siguientes
    //req.body
    //req.params
    //req.query
    const {error} = schema.validate(data);
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
