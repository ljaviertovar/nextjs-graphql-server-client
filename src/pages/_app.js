import { ApolloProvider } from '@apollo/client'
import { NextUIProvider } from '@nextui-org/react'

import client from "@/graphql/apollo-client"

import { darkTheme } from '@/themes/darktheme'

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </ApolloProvider>
  )
}
