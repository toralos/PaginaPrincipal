const bcrypt = require('bcrypt');
const db = require('../../database/models/index'); 

module.exports = {
  visualizo: function(req, res) {
    res.render('../views/login');
  },

  login: function(req, res) {
    const { mail, password } = req.body;

    // Buscar el usuario en la base de datos por su email
      db.Usuario.findOne({ email: mail }, (err, usertable) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error en el servidor');
      }

      // Verificar si el usuario existe
      if (!usertable) {
        return res.status(404).send('Usuario no encontrado');
      }

      // Comparar la contraseña ingresada con la contraseña almacenada
      bcrypt.compare(password, usertable.password, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error en el servidor');
        }

        // Verificar si las contraseñas coinciden
        if (result) {
          // Autenticación exitosa
          res.redirect('/index');
        } else {
          // Contraseña incorrecta
          res.send('Credenciales inválidas');
        }
      });
    });
  }
};
