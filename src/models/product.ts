import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface ProductAttributes {
  id?: string;
  name: string;
  description: string;
  price: number;
  qrcodeId: number;
  createdAt?: Date;
}

export interface ProductModel extends Model<ProductAttributes>, ProductAttributes {}

export class Product extends Model<ProductModel, ProductAttributes> {}

export type ProductStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductModel;
};

export function ProductFactory(sequelize: Sequelize): ProductStatic {
  return <ProductStatic>sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    qrcodeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
}
