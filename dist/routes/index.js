"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../utils/middlewares");
const services_1 = require("../services");
function routes(db) {
    const api = (0, express_1.Router)();
    const userController = new controllers_1.UserController(new services_1.UserService(db));
    const productController = new controllers_1.ProductController(new services_1.ProductService(db));
    api.post("/user", [middlewares_1.validateUser], userController.register);
    api.post("login", [middlewares_1.validatingLogin], userController.login);
    api.post("/product", [middlewares_1.validatingProduct], productController.createProducts);
    // track product by qrcode
    api.get("/product/:id", productController.trackProduct);
    return api;
}
exports.routes = routes;
