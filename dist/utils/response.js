"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.failedResponse = exports.successResponse = exports.apiResponse = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const js2xmlparser_1 = require("js2xmlparser");
const types_1 = require("../utils/types");
const apiResponse = (res, data, statusCode, rootElement = "") => {
    return res.format({
        json: () => {
            res.type(types_1.applicationJson);
            res.status(statusCode).send(data);
        },
        xml: () => {
            res.type(types_1.applicationXml);
            res.status(statusCode).send((0, js2xmlparser_1.parse)(rootElement || "", data));
        },
        default: () => {
            res.status(http_status_codes_1.default.NOT_ACCEPTABLE).send(http_status_codes_1.default.getStatusText(http_status_codes_1.default.NOT_ACCEPTABLE));
        },
    });
};
exports.apiResponse = apiResponse;
function successResponse(data) {
    return {
        success: true,
        data,
    };
}
exports.successResponse = successResponse;
function failedResponse(data) {
    return {
        success: false,
        data,
    };
}
exports.failedResponse = failedResponse;
