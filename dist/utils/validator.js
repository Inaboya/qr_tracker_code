"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = exports.validateUserRegistration = exports.validateLogin = void 0;
const validator_1 = __importDefault(require("validator"));
function validateLogin(credentials) {
    const errors = [];
    const { email = "", password = "" } = credentials;
    if (validator_1.default.isEmpty(email)) {
        errors.push({ email: "email is required" });
    }
    else if (validator_1.default.isEmail(email)) {
        errors.push({ email: "please provide a valid email" });
    }
    if (validator_1.default.isEmpty(password)) {
        errors.push({ password: "password is required" });
    }
    else if (!validator_1.default.isLength(password, { min: 5, max: 15 })) {
        errors.push({ password: "passwords must be from 5 to 15 characters" });
    }
    return errors;
}
exports.validateLogin = validateLogin;
function validateUserRegistration(data) {
    const errors = [];
    const { first_name = "", last_name = "", email = "", password = "" } = data;
    if (validator_1.default.isEmpty(first_name)) {
        errors.push({ first_name: "first name is required" });
    }
    if (validator_1.default.isEmpty(last_name)) {
        errors.push({ last_name: "last name is required" });
    }
    if (validator_1.default.isEmpty(email)) {
        errors.push({ email: "email is required" });
    }
    if (validator_1.default.isEmpty(password)) {
        errors.push({ password: "password is required" });
    }
    if (!validator_1.default.isEmpty(password)) {
        if (!validator_1.default.isLength(password, { min: 5, max: 15 })) {
            errors.push({ password: "passwords must be from 5 to 15 characters" });
        }
    }
    return errors;
}
exports.validateUserRegistration = validateUserRegistration;
function validateProduct(data) {
    const errors = [];
    const { name = "", price = "", description = "" } = data;
    if (validator_1.default.isEmpty(name)) {
        errors.push({ name: "name is required" });
    }
    if (validator_1.default.isEmpty(price)) {
        errors.push({ price: "price is required" });
    }
    if (validator_1.default.isEmpty(description)) {
        errors.push({ description: "quantity is required" });
    }
    return errors;
}
exports.validateProduct = validateProduct;
