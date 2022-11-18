import { DB } from "../models";
import qrcode from "qrcode";
// import { ProductRegister } from "../utils/types";
// import

export class ProductService {
  public constructor(private db: DB) {
    this.createProduct = this.createProduct.bind(this);
    this.generateQRCode = this.generateQRCode.bind(this);
  }

  public async createProduct(product: any) {
    const newProduct = await this.db.Product.create(product);

    await this.generateQRCode(newProduct.id as string);

    return newProduct;
  }

  async generateQRCode(id: string) {
    try {
      const qr_code = await qrcode.toDataURL(id);

      const newQRCode = await this.db.QRCode.create({
        code: qr_code as string,
        //   qrcodeId: id,
      });

      return newQRCode;
    } catch (error) {
      throw error;
    }
  }

  async trackProduct(id: string) {
    const product = await this.db.Product.findOne({
      where: { id },
      include: [
        {
          model: this.db.QRCode,
          as: "qrcode",
        },
      ],
    });

    return product;
  }
}
