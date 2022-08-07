import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const cache = new InMemoryCache()
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

export const client = new ApolloClient({
    
    uri: "http://localhost:4000/graphql",
    cache,
  })