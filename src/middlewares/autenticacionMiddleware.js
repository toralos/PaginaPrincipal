const autenticacionMiddleware = (req, res, next) => {
    if (req.session.user) {
      res.locals.user = req.session.user; // Se agrega la variable 'user' a res.locals para que esté disponible en las vistas
    }
    next();
  };
  

  module.exports = autenticacionMiddleware;