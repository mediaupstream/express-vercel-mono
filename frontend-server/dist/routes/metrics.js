"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsRoute = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
const collectDefaultMetrics = prom_client_1.default.collectDefaultMetrics;
const Registry = prom_client_1.default.Registry;
const register = new Registry();
collectDefaultMetrics({ register: register });
async function MetricsRoute(req, res) {
    if (req.headers['X-Forwarded-For']) {
        res.status(404).send('Not found');
    }
    try {
        res.set('Content-Type', register.contentType);
        res.end(await register.metrics());
    }
    catch (ex) {
        res.status(500).end(ex);
    }
}
exports.MetricsRoute = MetricsRoute;
//# sourceMappingURL=metrics.js.map