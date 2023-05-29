const db = require("../../database/models/index")
const bcrypt = require("bcrypt");
const { redirect } = require("express/lib/response");

module.exports = {
    register: function(req, res){
        res.render("../views/register")
        
    },
    recuperoPost: async (req,res)=>{
        
        if (await db.Usuario.findOne({ where: { mail: req.body.email } })) {
            res.send('Mail "' + req.body.email + '" is already taken') ;
        }else{
            db.Usuario.create({
                user: req.body.name,
                mail: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
            })
        }
        res.render("../views/registerSCC")
    }
}