  
module.exports = function(sequelize, dataTypes){
    let alias = "Producto";
    
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            uniqueIndex: true,
            notNull: true,
            autoIncrement: true,
            unique: true,
        },
        productos_nombre:{
            type: dataTypes.STRING(45),
            notNull: true,
        },
        productos_descripcion:{
            type: dataTypes.STRING(100),
        },
        productos_stock:{
            type: dataTypes.INTEGER,
            notNull: true,
        },
        id_marca:{
            type: dataTypes.INTEGER.UNSIGNED,
        }
    }

    let config = {
        tableName: "productos",
        timestamps: true,
    }
    const Producto = sequelize.define(alias, cols, config)

    return Producto
}