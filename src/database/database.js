import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'mernorm',
    'root',
    'admin', 
    {
        host: "localhost",
        dialect: "mysql",
    }
);