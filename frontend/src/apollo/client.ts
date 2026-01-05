import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
  uri: "http://localhost:4000/graphql", // change to your server URL
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
