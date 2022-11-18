import { Sequelize } from "sequelize";
import { UserFactory, UserStatic } from "./user";
import { ProductFactory, ProductStatic } from "./product";
import { QRCodeFactory, QRCodeStatic } from "./qrcode";

export interface DB {
  sequelize: Sequelize;
  User: UserStatic;
  Product: ProductStatic;
  QRCode: QRCodeStatic;
}

const sequelize = new Sequelize(
  (process.env.DB_DATABASE = "qrcodetracker"),
  (process.env.DB_USER = "inaboya"),
  (process.env.DB_PASSWORD = "12345678"),
  {
    port: 1433,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const User = UserFactory(sequelize);
const Product = ProductFactory(sequelize);
const QRCode = QRCodeFactory(sequelize);

Product.hasOne(QRCode, { foreignKey: "qrcodeId" });

export const db: DB = {
  sequelize,
  User,
  Product,
  QRCode,
};
