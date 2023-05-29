//REQUIERO LOS MODULOS QUE VOY A USAR

const express = require("express");
const app = express();
const path = require("path");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require("bcrypt");
var expressValidator = require('express-validator');
const indexRouter = require("./routes/indexRouter");
const productosRouter = require("./routes/productosRouter");
const usuarioRouter = require("./routes/usuarioRouter");
const logRouter = require("./routes/logRouter");
const unMiddleware = require ("./middlewares/unMiddleware");
const autenticacionMiddleware = require ("./middlewares/autenticacionMiddleware");

// AGREGAR MIDDLEWARE DE COOKIE-PARSER
app.use(cookieParser());

// AGREGAR MIDDLEWARE DE SESIÓN
app.use(session({
  secret: 'supercontraseña',
  resave: false,
  saveUninitialized: false
}));



// USAR EL MIDDLEWARE PERSONALIZADO
//app.use(unMiddleware);
app.use(autenticacionMiddleware);

// Middleware para pasar el usuario logueado a todas las vistas
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
  });

//SETEAMOS EL MOTOR DE VISTA EJS

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

//IMPORTANTE PARA PODER USAR LOS REQ.BODY OSEA EL METODO POST

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//ESTE ES EL HTML, CSS E IMAGINES QUE USE

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", indexRouter)
app.use("/productos", productosRouter)
app.use("/register", usuarioRouter)
app.use("/login", logRouter)

app.listen(3000, function(){
    console.log("El servidor esta corriendo en el puerto 3000")
})    

