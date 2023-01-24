"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseUrl = exports.useLocalApiPath = exports.staticFolder = exports.isProd = exports.camelCaseKeys = void 0;
const path_1 = __importDefault(require("path"));
function camelCaseKeys(obj) {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
        // Core keys are Pascal case so if we lower case the first letter it should be camel case.
        const newKey = key.charAt(0).toLowerCase() + key.slice(1);
        newObj[newKey] = obj[key];
    });
    return newObj;
}
exports.camelCaseKeys = camelCaseKeys;
exports.isProd = process.env.NODE_ENV === 'production';
exports.staticFolder = path_1.default.resolve(__dirname, '../../../frontend/static');
exports.useLocalApiPath = process.env.AWS_ELB === 'true' || process.env.E2E_TESTING === 'true' || process.env.ENABLE_API_PROXY === 'true';
/**
 * Infer the origin from the req.headers.host
 */
function getBaseUrl(req) {
    const host = req.get('host') ?? 'localhost:3000';
    const protocol = /localhost/i.test(host) ? 'http' : 'https';
    return `${protocol}://${host}`;
}
exports.getBaseUrl = getBaseUrl;
//# sourceMappingURL=helpers.js.map