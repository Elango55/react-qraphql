const typeDefs = `#graphql
  type Student {
    id: ID!
    name: String!
    email: String!
    course: String!
  }

  type StudentPage {
    data: [Student!]!
    page: Int!
    limit: Int!
    totalCount: Int!
  }

  type Query {
    students(page: Int, limit: Int, search: String): StudentPage!
  }

  type Mutation {
    addStudent(name: String!, email: String!, course: String!): Student!
    deleteStudent(id: ID!): Boolean!
    updateStudent(
      id: ID!
      name: String!
      email: String!
      course: String!
    ): Student!
  }
`;

export default typeDefs;
