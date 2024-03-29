import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "78296806102-o2l47uhk48l1p5ms4lld0eo5sfetfvbi.apps.googleusercontent.com",
      clientSecret: "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"

    }),

  ],
  jwt: {
    secret: "GENGARSTORE_SECRET",
    signingKey: "newsignignket"
  },
  secret: "GENGARSTORE_SECRE2312312T"

})
