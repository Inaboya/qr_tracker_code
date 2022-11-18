import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface QRCodeAttributes {
  id?: number;
  code: string;
  createdAt?: Date;
}

export interface QRModel extends Model<QRCodeAttributes> {}

export class QRCode extends Model<QRModel, QRCodeAttributes> {}

export type QRCodeStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): QRCode;
};

export function QRCodeFactory(sequelize: Sequelize): QRCodeStatic {
  return <QRCodeStatic>sequelize.define("qrcode", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
}
