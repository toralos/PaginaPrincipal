function unMiddleware(req, res, next) {
    if (req.session && req.session.loggedin) {
      // El usuario está autenticado y tiene una sesión válida
      next();
    } else {
      res.redirect("../views/registerSCC"); // Redirigir a la página de inicio de sesión si no está autenticado
    }
  }
  
  module.exports = unMiddleware;
  