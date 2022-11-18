"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const app_1 = require("./app");
const DEFAULT_PORT = process.env.PORT || 3010;
const server = https_1.default.createServer((0, app_1.expressApp)());
server.listen(DEFAULT_PORT, () => {
    console.log(`Server started at http://localhost:${DEFAULT_PORT}`);
});
