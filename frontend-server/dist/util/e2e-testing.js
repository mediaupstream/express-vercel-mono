"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyAxiomForE2E = void 0;
// cSpell:disable
const fs_1 = require("fs");
const path_1 = require("path");
let users = [];
if (process.env.E2E_TESTING === 'true') {
    users = JSON.parse((0, fs_1.readFileSync)((0, path_1.resolve)('../frontend-e2e-tests/backstop_data/engine_scripts/fixtures/users.json'), 'utf8'));
}
function modifyAxiomForE2E(axiom) {
    axiom.hostname = 'axiom-core-5c5bb6b548-hk6hr';
    axiom.version = 'v1.4.0-20201215T1830+b09524ac3';
    const testingLicense = {
        id: '4334abf6-da12-40c6-90bc-89ed40fca66a',
        issuer: '',
        // cSpell:disable-next-line
        issuedTo: 'axiuser',
        issuedAt: '2021-12-01T00:00:00Z',
        validFrom: '2021-12-01T00:00:00Z',
        expiresAt: '2222-06-30T22:59:59Z',
        tier: 'enterprise',
        monthlyIngestGb: 1000,
        apiRateLimitPerSecond: 0,
        maxUsers: 50,
        maxTeams: 10,
        maxDatasets: 25,
        maxMonitors: 1000,
        maxEndpoints: 1000,
        maxFields: 256,
        maxQueryWindowSeconds: 2592000,
        maxAuditWindowSeconds: 2592000,
        withRBAC: true,
        withAuths: ['local', 'sso'],
        features: {
            endpointsDatadog: false,
            endpointsHoneycomb: true,
            endpointsJaeger: true,
            endpointsLoki: true,
            endpointsSecureSyslog: true,
            endpointsSplunkevents: true,
        },
    };
    // When e2e tests are run in CI they use an uninitialized axiom instance so this property needs to be overwritten.
    axiom.needsInit = false;
    axiom.orgs = [
        {
            id: 'axiom',
            name: 'Slovak Industries Ltd',
            role: 'owner',
            primaryEmail: 'christopher@axiom.co',
            license: testingLicense,
            externalPlan: {},
            inTrial: false,
            lastUsageSync: '2021-12-01T00:00:00Z',
            plan: 'enterprise',
            planCreated: '2021-12-01T00:00:00Z',
        },
    ];
    axiom.user = {
        id: '8b92c1a5-160c-48fc-bac1-72e52ee27916',
        name: 'Christopher Very Longname',
        emails: ['christopher@axiom.co'],
        email: 'christopher@axiom.co',
    };
    // Read from frontend-e2e-tests/backstop_data/engine_scripts/fixtures/users.json
    axiom.users = users;
}
exports.modifyAxiomForE2E = modifyAxiomForE2E;
//# sourceMappingURL=e2e-testing.js.map