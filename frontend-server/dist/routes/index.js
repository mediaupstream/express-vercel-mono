"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRoute = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const axios_1 = require("../util/axios");
const e2e_testing_1 = require("../util/e2e-testing");
const featureFlags_1 = require("../util/featureFlags");
const helpers_1 = require("../util/helpers");
const next_auth_1 = require("../util/next-auth");
const { API_URL, E2E_TESTING, PLAY_MODE_READONLY_TOKEN, SEGMENT_WRITE_KEY, STATIC_ASSET_URL } = process.env;
let template;
// In production get the HTML template from the built `static` folder.
if (helpers_1.isProd) {
    const dashTemplateFile = path_1.default.join(helpers_1.staticFolder, 'dash.html');
    if (!fs_1.default.existsSync(dashTemplateFile)) {
        throw new Error(`Dash template file not found: ${dashTemplateFile}`);
    }
    const templateStr = fs_1.default.readFileSync(dashTemplateFile).toString('utf8');
    template = handlebars_1.default.compile(templateStr, { noEscape: true });
}
/**
 * Index route
 */
async function IndexRoute(req, res) {
    const templateParams = {
        assetUrl: STATIC_ASSET_URL || '/static',
        axiom: {
            authEmail: false,
            authLocal: false,
            enableJSMonitoring: E2E_TESTING !== 'true' ? true : false,
            needsInit: false,
            version: 'unknown',
        },
    };
    try {
        // Get template vars (based on logged in state) from Core which will be used
        // to populate the `window.axiom` object.
        const axiosInstance = await (0, axios_1.createAxios)(req);
        const response = await axiosInstance.get(`${API_URL}/v1/auth/status`);
        if (response.data) {
            // Remove variables we don't want to get from api.axiom.co.
            const { assetUrl, authProviders, fathomSite, languages, playMode, userId, emails, user, orgs, ...rest } = response.data;
            templateParams.axiom = rest;
            if (E2E_TESTING === 'true') {
                (0, e2e_testing_1.modifyAxiomForE2E)(templateParams.axiom);
            }
            else {
                // If the user is logged in and there is an Org in the Url then get Users list so frontend doesn't have to wait on it to make
                // permissions decisions.
                if (templateParams.axiom.user) {
                    const orgId = req.baseUrl.split('/')[1];
                    if (orgId) {
                        const usersResponse = await axiosInstance.get(`${API_URL}/v1/users`, {
                            headers: { ['x-axiom-org-id']: orgId },
                        });
                        if (usersResponse.data) {
                            templateParams.axiom.users = usersResponse.data;
                        }
                    }
                }
            }
        }
    }
    catch (exp) {
        console.error('Failed to get auth status', String(exp));
    }
    // In dev mode, get the HTML template from webpack dev server.
    if (!helpers_1.isProd) {
        try {
            const axiosInstance = await (0, axios_1.createAxios)(req);
            const response = await axiosInstance.get('http://127.0.0.1:8082/static/dash.html');
            template = handlebars_1.default.compile(response.data, { noEscape: true });
        }
        catch (exp) {
            console.error('Failed to get template', String(exp));
        }
    }
    // Add frontend specific feature flags.
    templateParams.axiom.features = (0, featureFlags_1.featureFlags)();
    // If AWS_ELB (Elastic Load Balancer),  or other scenarios are enabled it means we're making API calls to the same domain:
    templateParams.axiom.apiUrl = helpers_1.useLocalApiPath ? '/api' : API_URL;
    // Needed for the ingest sample `curl` command.
    templateParams.axiom.publicApiUrl = API_URL;
    templateParams.axiom.segmentWriteKey = SEGMENT_WRITE_KEY;
    // Play mode
    templateParams.axiom.playMode = (0, next_auth_1.isPlayMode)(req);
    templateParams.axiom.playModeReadonlyToken = PLAY_MODE_READONLY_TOKEN;
    const html = template(templateParams);
    res.send(html);
}
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=index.js.map