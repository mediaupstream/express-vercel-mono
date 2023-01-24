"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const next_1 = __importDefault(require("next-auth/next"));
const nextauth_1 = require("../config/nextauth");
async function AuthRoute(req, res) {
    // Fill in the "nextauth" [catch all route parameter](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes)
    req.query.nextauth = req.url.substring(1).split('?')[0].split('/');
    return (0, next_1.default)(req, res, nextauth_1.authConfig);
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=auth.js.map