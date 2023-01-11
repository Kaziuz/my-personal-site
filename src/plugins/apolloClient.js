
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'

const wordpressEndpoint = import.meta.env.VITE_MY_ENV_VARIABLE

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  // uri: 'https://kaziuz.unloquer.org/graphql',
  // uri: 'http://localhost:10004/graphql'
  uri: wordpressEndpoint
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient