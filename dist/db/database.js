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
const mysql_1 = require("mysql");
const config_1 = require("../config/config");
function (sql, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield (0, mysql_1.createConnection)(config_1.config.db);
            // const [results,] = await connection.query(sql, params);
            const [results,] = yield new Promise((resolve, reject) => {
                connection.query(sql, params, (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(results);
                    }
                });
            });
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
