import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import { PrismaAdapter } from "../../../lib/auth/prismaAdapter"

export function buildNextAuthOptions(
  req: NextApiRequest,
  res: NextApiResponse
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(),
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ?? " ",
        clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        authorization: {
          params: {
              scope: 'read:user, user:email', 
          },
        },
        profile(profile) {
          return {
            id: profile.id,
            name: profile.name!,
            avatar_url: profile.avatar_url,
            email: profile.email!
          }
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
            scope:
              "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email ",
          },
        },
        // // Restorna os dados do usuarios
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            avatar_url: profile.picture,
          };
        },
      }),
        
    ],
    callbacks: {
      // async signIn({ user }) {
      //   if(user) {
      //     return "/start";
      //   }
      //   return true
      // },
      async session({ session, user }) {
        return {
          ...session,
          user,
        };
      },
    }
  };
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions(req, res));
}
