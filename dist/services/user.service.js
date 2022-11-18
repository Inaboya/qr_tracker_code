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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor(db) {
        this.db = db;
        this.getUserByEmail = this.getUserByEmail.bind(this);
        this.save = this.save.bind(this);
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const saved = yield this.db.User.findOne({
                where: { email },
            });
            return saved;
        });
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const saved = yield this.db.User.create(user);
            return saved;
        });
    }
}
exports.UserService = UserService;
