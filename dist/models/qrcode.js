"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCodeFactory = exports.QRCode = void 0;
const sequelize_1 = require("sequelize");
class QRCode extends sequelize_1.Model {
}
exports.QRCode = QRCode;
function QRCodeFactory(sequelize) {
    return sequelize.define("qrcode", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        code: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
    });
}
exports.QRCodeFactory = QRCodeFactory;
