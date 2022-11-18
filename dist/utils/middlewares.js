"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatingProduct = exports.validatingLogin = exports.validateUser = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const response_1 = require("./response");
const validator_1 = require("./validator");
function validateUser(req, res, next) {
    try {
        const valid = (0, validator_1.validateUserRegistration)(req.body);
        if (valid.length > 0) {
            (0, response_1.apiResponse)(res, (0, response_1.failedResponse)(valid), http_status_codes_1.default.BAD_REQUEST);
        }
        else {
            next();
        }
    }
    catch (error) {
        throw error;
    }
}
exports.validateUser = validateUser;
function validatingLogin(req, res, next) {
    try {
        const valid = (0, validator_1.validateLogin)(req.body);
        if (valid.length > 0) {
            (0, response_1.apiResponse)(res, (0, response_1.failedResponse)(valid), http_status_codes_1.default.BAD_REQUEST);
        }
        else {
            next();
        }
    }
    catch (error) {
        throw error;
    }
}
exports.validatingLogin = validatingLogin;
function validatingProduct(req, res, next) {
    try {
        const valid = (0, validator_1.validateProduct)(req.body);
        if (valid.length > 0) {
            (0, response_1.apiResponse)(res, (0, response_1.failedResponse)(valid), http_status_codes_1.default.BAD_REQUEST);
        }
        else {
            next();
        }
    }
    catch (error) {
        throw error;
    }
}
exports.validatingProduct = validatingProduct;
