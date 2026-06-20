import { DataTypes } from "sequelize";
import sequelize from "../db";

const Potion = sequelize.define('Potion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    photo: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.NUMBER,
    }
});

export default Potion;