"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
// cSpell:ignore frapi signin
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/order
require("dotenv/config");
const apiProxy_1 = require("./routes/apiProxy");
const auth_1 = require("./routes/auth");
const index_1 = require("./routes/index");
const netlify_1 = require("./routes/integrations/netlify");
const metrics_1 = require("./routes/metrics");
const user_status_1 = require("./routes/user-status");
const dash_1 = require("./util/dash");
const app = (0, dash_1.initDash)();
/**
 * Frontend API routes
 */
app.use('/frapi/auth', auth_1.AuthRoute);
app.get('/frapi/integrations/netlify', netlify_1.NetlifyIntegrationRoute);
app.get('/frapi/status', user_status_1.UserStatusRoute);
/**
 * Special endpoint for Prometheus metrics
 */
app.use('/metrics', metrics_1.MetricsRoute);
/**
 * Optional API proxy routes
 */
if (process.env.ENABLE_API_PROXY === 'true' || process.env.E2E_TESTING === 'true') {
    app.use(['/api', '/auth/signin/credentials', '/logout'], apiProxy_1.APIProxyRoute);
}
/**
 * Index route, this serves static/dash.html from pkg/frontend
 */
app.use('*', index_1.IndexRoute);
const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Express server listening on port ${port}`));
process.on('uncaughtException', function (error) {
    console.error('Uncaught exception:', error);
});
process.on('unhandledRejection', function (reason, promise) {
    console.error('Unhandled rejection at: Promise ', promise, reason);
});
['SIGINT', 'SIGHUP', 'SIGQUIT', 'SIGTERM', 'exit'].forEach((signalName) => process.on(signalName, (signal) => {
    console.info('CLEANUP and exit.', signalName, signal);
    process.exit();
}));
//# sourceMappingURL=index.js.map