import NextAuth from 'next-auth';
import Auth0 from 'next-auth/providers/auth0';

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut
} = NextAuth({
  providers: [
    Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER_BASE_URL
    })
  ],

  secret: process.env.AUTH0_SECRET //this is an AUTH secret. it can be generated by a terminal command.
});
