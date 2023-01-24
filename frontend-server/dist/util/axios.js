"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAxios = void 0;
const axios_1 = __importDefault(require("axios"));
const next_auth_1 = require("./next-auth");
async function createAxios(req) {
    const config = {
        headers: {},
    };
    // Add the `next-auth` JWT token as the Bearer token so
    // the API recognizes the user.
    const accessToken = await (0, next_auth_1.axiomGetAccessToken)(req);
    config.headers.authorization = `Bearer ${accessToken}`;
    // Reuse the cookie the browser sent us.
    // if (req.headers.cookie) {
    //   config.headers.cookie = req.headers.cookie;
    // }
    // if (orgId) {
    //   config.headers['x-axiom-org-id'] = orgId;
    // }
    const instance = axios_1.default.create(config);
    // Configure axios error handling.
    instance.interceptors.response.use((response) => response, async (error) => {
        let message;
        if (error) {
            if (error.response && error.response.data) {
                if (error.response.data.error) {
                    message = error.response.data.error;
                }
                else if (error.response.data.message) {
                    message = error.response.data.message;
                }
            }
            if (!message && error.message) {
                message = error.message;
            }
        }
        console.error('API request failed', message, error.response?.status, error.response?.data, error.response?.headers);
        return Promise.reject(error);
    });
    return instance;
}
exports.createAxios = createAxios;
//# sourceMappingURL=axios.js.map