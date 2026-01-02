export const typeDefs = `
  type Task {
    id: ID!
    title: String!
    status: String!
  }

  type Project {
    id: ID!
    name: String!
    tasks: [Task]
  }

  type Query {
    projects: [Project]
  }

  type Mutation {
    addProject(name: String!): Project
    addTask(projectId: ID!, title: String!): Task
  }
`;
