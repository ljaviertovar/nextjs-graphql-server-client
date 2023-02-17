import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

import typeDefs from "@/graphql/schemas"
import resolvers from "@/graphql/resolvers"

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
})

export default handler