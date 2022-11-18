"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const response_1 = require("../utils/response");
class ProductController {
    constructor(productService) {
        this.productService = productService;
        this.createProducts = this.createProducts.bind(this);
        this.trackProduct = this.trackProduct.bind(this);
    }
    createProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Create a product and generate a qrcode
                const product = req.body;
                const newProduct = yield this.productService.createProduct(product);
                return (0, response_1.apiResponse)(res, (0, response_1.successResponse)(newProduct), http_status_codes_1.default.OK);
            }
            catch (error) {
                throw error;
            }
        });
    }
    trackProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield this.productService.trackProduct(id);
                return (0, response_1.apiResponse)(res, (0, response_1.successResponse)(product), http_status_codes_1.default.OK);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.ProductController = ProductController;
