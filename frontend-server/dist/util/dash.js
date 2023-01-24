"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureCsp = exports.initDash = void 0;
// cSpell:ignore frameguard hsts
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const handlebars_1 = __importDefault(require("handlebars"));
const helmet_1 = __importDefault(require("helmet"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const morgan_1 = __importDefault(require("morgan"));
const helpers_1 = require("./helpers");
const { API_URL, E2E_TESTING, ENABLE_JS_MONITORING, LOGIN_URL, STATIC_ASSET_URL } = process.env;
if (!API_URL) {
    throw new Error('API_URL environment variable is not set.');
}
if (!LOGIN_URL) {
    throw new Error('LOGIN_URL environment variable is not set.');
}
/**
 * Initialize Dash
 */
function initDash() {
    const app = (0, express_1.default)();
    handlebars_1.default.registerHelper('json', function (context) {
        return JSON.stringify(context);
    });
    app.use((0, compression_1.default)());
    app.use((0, morgan_1.default)('tiny'));
    if (E2E_TESTING !== 'true') {
        app.use(helmet_1.default.contentSecurityPolicy({
            directives: configureCsp(),
        }));
    }
    app.use(helmet_1.default.frameguard());
    app.use(helmet_1.default.hsts());
    app.use(helmet_1.default.noSniff());
    app.use(helmet_1.default.xssFilter());
    // Removes the X-Powered-By header if it was set.
    // http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
    app.use(helmet_1.default.hidePoweredBy());
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    const webpackAssetPaths = ['/chunks', '/js', '/static'];
    // Server static assets from either file system (in prod) or webpack dev server (in dev).
    if (helpers_1.isProd) {
        // Everything else (like favicon.ico) is cached for an hour. You may want to be
        // more aggressive with this caching.
        // FUTURE: get rid of /static or / (shouldn't need both)
        // 🐉🐉🐉
        // Don't change the order of this array.
        app.use(webpackAssetPaths, express_1.default.static(helpers_1.staticFolder, { maxAge: '1h' }));
    }
    else {
        // Proxy to webpack dev server.
        app.use(webpackAssetPaths, (0, http_proxy_middleware_1.createProxyMiddleware)({ target: 'http://127.0.0.1:8082', changeOrigin: true }));
    }
    return app;
}
exports.initDash = initDash;
/**
 * Configure the Content Security Policy
 */
function configureCsp() {
    const cspDirectives = {
        ...helmet_1.default.contentSecurityPolicy.getDefaultDirectives(),
        'child-src': ["'self'", 'blob:'],
        'object-src': ["'self'"],
        // TODO: dynamically add Stripe Urls.
        'frame-src': ["'self'", 'https://js.stripe.com', 'https://hooks.stripe.com', 'https://q.stripe.com'],
        'connect-src': ["'self'", 'https://api.stripe.com', 'https://s-cdn.axiom.co', 'https://s.axiom.co'],
        'font-src': ["'self'"],
        'worker-src': ["'self'", 'blob:'],
        'style-src': ["'self'", "'unsafe-inline'"],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://js.stripe.com', 'https://s-cdn.axiom.co'],
        'img-src': ["'self'", 'data:', 'https://www.gravatar.com'],
    };
    if (!helpers_1.useLocalApiPath) {
        cspDirectives['connect-src'].push(API_URL);
    }
    if (STATIC_ASSET_URL) {
        let staticAssetUrl = STATIC_ASSET_URL;
        if (!staticAssetUrl.endsWith('/')) {
            staticAssetUrl += '/';
        }
        cspDirectives['child-src'].push(staticAssetUrl);
        cspDirectives['object-src'].push(staticAssetUrl);
        cspDirectives['font-src'].push(staticAssetUrl);
        cspDirectives['worker-src'].push(staticAssetUrl);
        cspDirectives['style-src'].push(staticAssetUrl);
        cspDirectives['script-src'].push(staticAssetUrl);
        cspDirectives['img-src'].push(staticAssetUrl);
    }
    if (ENABLE_JS_MONITORING === 'true') {
        cspDirectives['connect-src'].push('https://capture.trackjs.com');
        cspDirectives['script-src'].push('https://cdn.trackjs.com');
        cspDirectives['img-src'].push('https://usage.trackjs.com', 'https://fault.trackjs.com');
    }
    return cspDirectives;
}
exports.configureCsp = configureCsp;
//# sourceMappingURL=dash.js.map