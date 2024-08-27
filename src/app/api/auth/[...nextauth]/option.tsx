import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import axios from "axios";
import { User } from "next-auth";

interface CustomUser extends User {
  token?: string;
  userId?: string;
  firstName?: string;
  lastName?: string;
  phoneNo?: string;
  email?: string;
  tokenExpiration?: number;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_Backend_URL}/api/auth/login-with-password`,
            {
              email: credentials.email,
              password: credentials.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          console.log(response,"credential;s check")

          const data = response.data;
          console.log("credential;s data",data)


          console.log(data, "data hai");

          if (!data.status) {
            throw new Error(data.message || "Authentication failed");
          }

          return {
            token: data.data.api_token,
            userId: data.data.id,
            firstName: data.data.first_name,
            lastName: data.data.last_name,
            phoneNo: data.data.mobile,
            email: data.data.email,
            tokenExpiration: Date.now() + 2 * 24 * 60 * 60 * 1000, // Token valid for 2 days
          } as CustomUser;
        } catch (error) {
          console.error("Authorization Error:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user}) {
      if (user) {
        return {
          ...token,
          token: user.token,
          userId: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNo: user.phoneNo,
          email: user.email,
          tokenExpiration: user.tokenExpiration,
        } as CustomUser;
      }

      console.log("token", token);

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        token: token.token,
        user: {
          ...session.user,
          userId: token.userId,
          firstName: token.firstName,
          lastName: token.lastName,
          phoneNo: token.phoneNo,
          email: token.email,
        } as CustomUser,
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/login",
    error: "/authError",
  },
};
