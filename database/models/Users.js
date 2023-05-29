module.exports = function(sequelize, dataTypes){
    let alias = "Usuario";
    
    let cols = {
        userID:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            uniqueIndex: true,
            notNull: true,
            autoIncrement: true,
            unique: true,
        },
        user:{
            type: dataTypes.STRING(100),
            notNull: true,
        },
        mail:{
            type: dataTypes.STRING(100),
            notNull: true,
            uniqueIndex: true,
        },
        password:{
            type: dataTypes.STRING(300),
            notNull: true,
        },
    }

    let config = {
        tableName: "usertable",
        timestamps: true,
    }
    const Usuario = sequelize.define(alias, cols, config)

    return Usuario
}