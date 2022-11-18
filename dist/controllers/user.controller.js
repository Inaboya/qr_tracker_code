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
exports.UserController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const encrypter_1 = require("../utils/encrypter");
const passpost_1 = require("../utils/passpost");
const response_1 = require("../utils/response");
class UserController {
    constructor(userService) {
        this.userService = userService;
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const isEmailExist = yield this.userService.getUserByEmail(user.email);
                if (isEmailExist !== null) {
                    return (0, response_1.apiResponse)(res, (0, response_1.failedResponse)(http_status_codes_1.default.BAD_REQUEST), http_status_codes_1.default.BAD_REQUEST);
                }
                user.password = yield (0, encrypter_1.encryptPassword)(user.password, 10);
                const newUser = yield this.userService.save(user);
                return (0, response_1.apiResponse)(res, (0, response_1.successResponse)(newUser), http_status_codes_1.default.OK);
            }
            catch (error) {
                throw error;
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const loginCredentials = req.body;
                const stored = yield this.userService.getUserByEmail(loginCredentials.email);
                if (stored === null) {
                    return (0, response_1.apiResponse)(res, (0, response_1.failedResponse)("Email not found"), http_status_codes_1.default.NOT_FOUND);
                }
                const samePassword = yield (0, encrypter_1.isEqualPassword)(stored.password, loginCredentials.password);
                if (!samePassword) {
                    return (0, response_1.apiResponse)(res, (0, response_1.failedResponse)("User Not Found"), http_status_codes_1.default.NOT_FOUND);
                }
                const loginedUser = {
                    id: stored.id,
                    email: stored.email,
                    first_name: stored.first_name,
                    last_name: stored.last_name,
                };
                const token = (0, passpost_1.createToken)(loginedUser);
                return (0, response_1.apiResponse)(res, (0, response_1.successResponse)(Object.assign(Object.assign({}, loginedUser), { token: `Bearer ${token}` })), http_status_codes_1.default.OK);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.UserController = UserController;
