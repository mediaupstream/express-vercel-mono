"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatusRoute = void 0;
const axios_1 = require("../util/axios");
const e2e_testing_1 = require("../util/e2e-testing");
const { API_URL, E2E_TESTING } = process.env;
async function UserStatusRoute(req, res) {
    // Return all Orgs and if an Org is active the Users for that Org
    try {
        const result = {
            user: undefined,
            users: [],
            orgs: [],
        };
        // Get Orgs and Users for the logged in user.
        const axiosInstance = await (0, axios_1.createAxios)(req);
        const response = await axiosInstance.get(`${API_URL}/v1/auth/status`);
        if (response.data) {
            result.orgs = response.data.orgs;
            result.user = response.data.user;
            if (E2E_TESTING === 'true') {
                (0, e2e_testing_1.modifyAxiomForE2E)(result);
            }
            else {
                // If the user is logged in (should always be the case now)
                // and there is an Org in the Url, then get Users list so frontend doesn't
                // have to wait on it to make permissions decisions.
                if (result.user) {
                    try {
                        const orgId = String(req.headers['x-axiom-org-id']);
                        if (orgId) {
                            const usersResponse = await axiosInstance.get(`${API_URL}/v1/users`, {
                                headers: { ['x-axiom-org-id']: orgId },
                            });
                            if (usersResponse.data) {
                                result.users = usersResponse.data;
                            }
                        }
                    }
                    catch (err) {
                        // Ignore failing to get Users.
                        // This will happen if the customer has a tab sitting on the Login page
                        // and then they login to a different tab.
                    }
                }
            }
        }
        res.send(JSON.stringify(result));
    }
    catch (err) {
        return res.status(err.response?.status || 500).send({ error: 'Unable to retrieve user status.' });
    }
}
exports.UserStatusRoute = UserStatusRoute;
//# sourceMappingURL=user-status.js.map