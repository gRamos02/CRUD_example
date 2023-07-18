import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.js";

class User extends Model {}

User.init({
    //Los atributos del modelo se definen aqui
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    //------------ 
}, {
    //Otras opciones
    sequelize,
    modelName: 'user',
    timestamps: true, //Esto agrega dos columnas, createdAt, updatedAt
});

export default User;