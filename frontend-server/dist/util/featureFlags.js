"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.featureFlags = void 0;
function featureFlags() {
    const features = {
        // Enable Netlify integration when the NETLIFY_CLIENT_ID and NETLIFY_SECRET are set
        // and we're not in self-host mode
        netlifyIntegration: !!(process.env.HOST_MODE !== 'self-host' &&
            process.env.NETLIFY_CLIENT_ID &&
            process.env.NETLIFY_SECRET),
    };
    return features;
}
exports.featureFlags = featureFlags;
//# sourceMappingURL=featureFlags.js.map