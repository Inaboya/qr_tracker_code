"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function createToken(userData) {
    return (0, jsonwebtoken_1.sign)(userData, process.env.privateKey, {
        algorithm: "HS512",
        expiresIn: "1d",
    });
}
exports.createToken = createToken;
