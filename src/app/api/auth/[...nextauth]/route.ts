import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

export const authOptions:NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 24 * 7,
        
    },
    callbacks: {
        async signIn({user}: { user: any}) {
            try {
                const cookie = await cookies()
                const fetching = await fetch('http://localhost:5000/api/provider-signup', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(user)
                })
                const response = await fetching.json()
                cookie.set('accessToken', response?.accessToken)

                return user
            } catch (err: any) {
                return err
           }
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }







