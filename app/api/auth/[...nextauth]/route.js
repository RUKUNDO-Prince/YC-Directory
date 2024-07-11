import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from '@utils/database'

console.log({
    clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
})

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],

    async session ({ session }) {

    },

    async signIn ({ profile }) {
        try {
            await connectToDB();

            // CHECK IF THE USER ALREADY EXISTS

            // IF A USER DOESN'T EXIST, CREATE ONE AND SAVE TO THE DATABASE
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
});

export { handler as GET, handler as POST };