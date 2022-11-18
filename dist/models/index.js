"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
const product_1 = require("./product");
const qrcode_1 = require("./qrcode");
const sequelize = new sequelize_1.Sequelize((process.env.DB_DATABASE = "qrcodetracker"), (process.env.DB_USER = "inaboya"), (process.env.DB_PASSWORD = "12345678"), {
    port: 5432,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
const User = (0, user_1.UserFactory)(sequelize);
const Product = (0, product_1.ProductFactory)(sequelize);
const QRCode = (0, qrcode_1.QRCodeFactory)(sequelize);
Product.hasOne(QRCode, { foreignKey: "qrcodeId" });
exports.db = {
    sequelize,
    User,
    Product,
    QRCode,
};
