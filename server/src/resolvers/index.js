import { projectResolver } from "./project.resolver.js";

export const resolvers = {
  Query: {
    ...projectResolver.Query
  },
  Mutation: {
    ...projectResolver.Mutation
  }
};
