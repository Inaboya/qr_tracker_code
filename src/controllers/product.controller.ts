import { NextFunction, Request, Response } from "express";
import StatusCodes from "http-status-codes";
import { ProductService } from "../services";
import {
  apiResponse,
  failedResponse,
  successResponse,
} from "../utils/response";
import { ProductRegister } from "../utils/types";

export class ProductController {
  public constructor(private productService: ProductService) {
    this.createProducts = this.createProducts.bind(this);
    this.trackProduct = this.trackProduct.bind(this);
  }

  public async createProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      // Create a product and generate a qrcode

      const product = <ProductRegister>req.body;

      const newProduct = await this.productService.createProduct(product);

      return apiResponse(res, successResponse(newProduct), StatusCodes.OK);
    } catch (error) {
      throw error;
    }
  }

  async trackProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const product = await this.productService.trackProduct(id);

      return apiResponse(res, successResponse(product), StatusCodes.OK);
    } catch (error) {
      throw error;
    }
  }
}
