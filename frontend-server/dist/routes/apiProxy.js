"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIProxyRoute = void 0;
const http_proxy_middleware_1 = require("http-proxy-middleware");
const next_auth_1 = require("../util/next-auth");
const apiProxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: process.env.API_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // remove /api from the path before proxying
    },
    // 🐉🐉🐉
    // We need to restream parsed body before proxying.
    // https://github.com/chimurai/http-proxy-middleware/issues/40#issuecomment-249430255
    onProxyReq: (proxyReq, req) => {
        if (req.body) {
            const bodyData = JSON.stringify(req.body);
            // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
            proxyReq.setHeader('Content-Type', 'application/json');
            proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
            // stream the content
            proxyReq.write(bodyData);
        }
    },
});
async function APIProxyRoute(req, res) {
    const accessToken = await (0, next_auth_1.axiomGetAccessToken)(req);
    req.headers.authorization = `Bearer ${accessToken}`;
    return apiProxy(req, res, (result) => {
        if (result instanceof Error) {
            throw result;
        }
        throw new Error(`Request '${req.url}' was not proxied! We should never reach here!`);
    });
}
exports.APIProxyRoute = APIProxyRoute;
//# sourceMappingURL=apiProxy.js.map