"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFactory = exports.Product = void 0;
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
}
exports.Product = Product;
function ProductFactory(sequelize) {
    return sequelize.define("product", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        qrcodeId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    });
}
exports.ProductFactory = ProductFactory;
