import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import GET_USERS from '@/graphql/queries/getUsers.gql'


const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
})


export default async function handler(_req, res) {

  const { data } = await client.query({
    query: GET_USERS,
  })

  res.status(200).json({ users: data.users })


}
