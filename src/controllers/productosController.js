const db = require("../../database/models/index")

module.exports = {
    detail: function(req,res){
        db.Producto.findByPk(req.params.id)
        .then(function(productos){
            return res.render("detail",{
                productos
            })
        })
    },
    productos: function(req, res){
        db.Producto.findAll()
        .then(function(productos){
            return res.render("productos",{
                productos
            })
        })
    }
}