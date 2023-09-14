const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        static associate(models){
            this.belongsTo(models.User, {foreignKey: 'userId'});
        }
    }

    Task.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('active','inactive','in_progress','finished','canceled'),
            allowNull: false,
        }
    }, {
        //Otras opciones
        sequelize,
        modelName: 'Task',
        tableName: 'tasks',
        timestamps: true, //Esto agrega dos columnas, createdAt, updatedAt
    });
    return Task;
}

