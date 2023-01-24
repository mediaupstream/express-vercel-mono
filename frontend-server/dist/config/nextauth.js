"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = void 0;
exports.authConfig = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        {
            id: 'axiom',
            name: 'Axiom',
            type: 'oauth',
            authorization: {
                url: `${process.env.LOGIN_URL}/oauth/authorize`,
                params: { scope: '*' },
            },
            token: `${process.env.LOGIN_URL}/oauth/token`,
            client: {
                token_endpoint_auth_method: 'client_secret_post',
            },
            clientSecret: process.env.AXIOM_OAUTH_CLIENT_SECRET,
            clientId: process.env.AXIOM_OAUTH_CLIENT_ID,
            userinfo: `${process.env.API_URL}/v1/user`,
            profile: function (profile) {
                return {
                    id: profile.id,
                    name: profile.name,
                    email: profile.emails[0],
                };
            },
        },
    ],
    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
    theme: {
        colorScheme: 'light',
    },
    callbacks: {
        jwt: async function ({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        // Make the JWT token accessible to the frontend.
        session: async function ({ session, token }) {
            return {
                ...session,
                accessToken: token?.accessToken,
            };
        },
    },
};
//# sourceMappingURL=nextauth.js.map