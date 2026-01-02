export const typeDefs = `#graphql
  type Student {
    id: ID!
    name: String!
    age: Int!
    course: String!
  }

  type Query {
    students: [Student]
  }

  type Mutation {
    addStudent(name: String!, age: Int!, course: String!): Student
    editStudent(id: ID!, name: String!, age: Int!, course: String!): Student
    deleteStudent(id: ID!): Boolean
  }
`;
