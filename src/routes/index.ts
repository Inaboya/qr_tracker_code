import { Router } from "express";
// import { UserController } from "../controllers/user.controller";
import { DB } from "../models";
import { ProductController, UserController } from "../controllers";


import {
  validateUser,
  validatingLogin,
  validatingProduct,
} from "../utils/middlewares";
import { ProductService, UserService } from "../services";

export function routes(db: DB) {
  const api = Router();

  const userController = new UserController(new UserService(db));
  const productController = new ProductController(new ProductService(db));

  api.post("/user", [validateUser], userController.register);
  api.post("login", [validatingLogin], userController.login);
  api.post("/product", [validatingProduct], productController.createProducts);
  // track product by qrcode
  api.get("/product/:id", productController.trackProduct);

  return api;
}
