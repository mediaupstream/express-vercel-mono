"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlayServer = exports.isPlayMode = exports.axiomGetAccessToken = void 0;
const jwt_1 = require("next-auth/jwt");
async function axiomGetAccessToken(req) {
    if ((0, exports.isPlayMode)(req)) {
        if (!process.env.PLAY_MODE_READONLY_TOKEN) {
            throw new Error('PLAY_MODE_READONLY_TOKEN is not configured.');
        }
        return process.env.PLAY_MODE_READONLY_TOKEN;
    }
    else {
        const token = await (0, jwt_1.getToken)({ req: req, secret: process.env.NEXTAUTH_SECRET });
        return String(token?.accessToken) || undefined;
    }
}
exports.axiomGetAccessToken = axiomGetAccessToken;
const isPlayMode = (req) => {
    return process.env.PLAY_MODE === 'true' || (0, exports.isPlayServer)(req) || false;
};
exports.isPlayMode = isPlayMode;
const isPlayServer = (req) => {
    const hostname = req?.headers.host;
    return (hostname || '').toLowerCase().startsWith('play.');
};
exports.isPlayServer = isPlayServer;
//# sourceMappingURL=next-auth.js.map