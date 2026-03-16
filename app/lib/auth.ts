import { betterAuth } from "better-auth";

export const auth = betterAuth({
  //   database: {
  //     provider: "postgresql",
  //     url: process.env.DATABASE_URL!,
  //   },
  emailAndPassword: {
    enabled: true,
  },
  //   emailVerification: {
  //     sendVerificationEmail: async ({ user, url, token }) => {
  //       console.log(user, url, token);
  //     },
  //   },
  //   passwordReset: {
  //     sendPasswordResetEmail: async ({ user, url, token }) => {
  //       console.log(user, url, token);
  //     },
  //   },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 7 * 24 * 60 * 60, // 7 days cache duration
      strategy: "jwe", // can be "jwt" or "compact"
      refreshCache: true, // Enable stateless refresh
    },
  },
  account: {
    storeStateStrategy: "cookie",
    storeAccountCookie: true, // Store account data after OAuth flow in a cookie (useful for database-less flows)
  },

  pages: {
    signIn: "/login",
    signUp: "/register",
    // verifyEmail: "/verify-email",
    // resetPassword: "/reset-password",
    // resetPasswordConfirm: "/reset-password-confirm",
  },
});
