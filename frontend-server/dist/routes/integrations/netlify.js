"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetlifyIntegrationRoute = void 0;
const jwt_1 = require("next-auth/jwt");
const uuid_1 = require("uuid");
const helpers_1 = require("../../util/helpers");
const AUTH_URL = 'https://app.netlify.com/authorize';
const TOKEN_URL = 'https://api.netlify.com/oauth/token';
const NETLIFY_COOKIE = 'netlifyState';
const { NETLIFY_CLIENT_ID, NETLIFY_SECRET, NEXTAUTH_SECRET, AWS_ELB, API_URL } = process.env;
/**
 * Infer the origin from the req.headers.host
 */
function getRedirectUrl(req) {
    return `${(0, helpers_1.getBaseUrl)(req)}/frapi/integrations/netlify`;
}
/**
 * Generate the URL to access Netlify's integration auth page
 */
function getAuthUrl(state, redirectUri) {
    if (!NETLIFY_CLIENT_ID) {
        throw new Error('Netlify integration missing CLIENT_ID');
    }
    const params = {
        client_id: NETLIFY_CLIENT_ID,
        response_type: 'code',
        redirect_uri: redirectUri,
        state: state,
    };
    return `${AUTH_URL}?${new URLSearchParams(params)}`;
}
function getState(orgId) {
    return `${Buffer.from(orgId).toString('hex')}:${(0, uuid_1.v4)()}`;
}
function getOrgId(state) {
    return Buffer.from(state.split(':')[0], 'hex').toString();
}
async function getAccessToken(code, redirectUri) {
    if (!NETLIFY_CLIENT_ID || !NETLIFY_SECRET) {
        throw new Error('Missing Netlify integration credentials');
    }
    const params = {
        client_id: NETLIFY_CLIENT_ID,
        client_secret: NETLIFY_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
    };
    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(params),
    });
    if (response.status >= 400) {
        throw new Error(`Netlify integration failed: ${response.status} ${response.statusText}`);
    }
    return response.json();
}
/**
 * Route handler for the Netlify integration.
 * This will redirect the user to the Netlify auth page, where they can "Authorize" our app.
 */
function handleAuth(req, res) {
    const { orgId } = req.query;
    const state = getState(orgId);
    const url = getAuthUrl(state, getRedirectUrl(req));
    // set state to cookie, to verify csrf
    res.setHeader('Set-Cookie', `${NETLIFY_COOKIE}=${state}; Path=/; HttpOnly; Max-Age=1800`);
    res.redirect(url);
}
/**
 * Route handler for the Netlify auth callback.
 * This will exchange the auth code for an access token, send that token to
 * the API so it can be associated with the orgId, and then redirect the user
 * back to the dashboard
 */
async function handleAuthCallback(req, res) {
    const token = await (0, jwt_1.getToken)({ req: req, secret: NEXTAUTH_SECRET });
    const { code, state } = req.query;
    // verify state
    const clientState = req.cookies[NETLIFY_COOKIE];
    if (!token) {
        return res.status(401).send('Invalid token');
    }
    if (!code) {
        return res.status(400).send('Invalid or missing code value');
    }
    if (!clientState || clientState !== state) {
        return res.status(400).send('Invalid Netlify state');
    }
    // get access token from Netlify using the code
    const accessToken = await getAccessToken(code, getRedirectUrl(req));
    const orgId = getOrgId(state);
    const cfgId = `netlify.${orgId}`;
    // delete Netlify state cookie
    res.setHeader('Set-Cookie', `${NETLIFY_COOKIE}=""; Path=/; HttpOnly; Max-Age=-1`);
    // get path to the api, if we're behind an ELB it's the current server URL + /api
    const apiPath = AWS_ELB === 'true' ? `${(0, helpers_1.getBaseUrl)(req)}/api` : API_URL;
    // send code and orgId to API
    const response = await fetch(`${apiPath}/v1/integrations/netlify/connect`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token?.accessToken}`,
            'Content-Type': 'application/json',
            'x-axiom-org-id': orgId,
        },
        body: JSON.stringify({
            properties: {
                org_id: orgId,
                access_token: accessToken.access_token,
                refresh_token: accessToken.refresh_token,
            },
        }),
    });
    if (response.status >= 400) {
        return res.status(response.status).send(response?.statusText ?? 'Unknown error');
    }
    // return the user to the integrations page
    res.redirect(`/${orgId}/settings/integrations/${cfgId}`);
}
async function NetlifyIntegrationRoute(req, res) {
    const { orgId, code, state } = req.query;
    // Handle the auth callback
    if (code && state) {
        return handleAuthCallback(req, res);
    }
    // Handle the auth request
    if (orgId) {
        return handleAuth(req, res);
    }
    return res.status(400).send('Invalid request');
}
exports.NetlifyIntegrationRoute = NetlifyIntegrationRoute;
//# sourceMappingURL=netlify.js.map