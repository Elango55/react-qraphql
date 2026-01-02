import { projectResolver } from "./studentResolver.js";

export const resolvers = {
  Query: {
    ...resolvers.Query
  },
  Mutation: {
    ...resolvers.Mutation
  }
};
