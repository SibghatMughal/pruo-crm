import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";

//oauth config options for google and linkedin login
export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID as string,
      //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      clientId:
        "770674278192-tonnb0c16iq042vcm0do8ss1e7k0buan.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    LinkedinProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
  ],
};
