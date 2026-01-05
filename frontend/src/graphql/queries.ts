import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
  query Students($page: Int, $limit: Int, $search: String) {
    students(page: $page, limit: $limit, search: $search) {
      totalCount
      data {
        id
        name
        email
        course
      }
      page
      limit
    }
  }
`;

export const ADD_STUDENT = gql`
  mutation AddStudent($name: String!, $email: String!, $course: String!) {
    addStudent(name: $name, email: $email, course: $course) {
      id
    }
  }
`;

export const UPDATE_STUDENT = gql`
  mutation UpdateStudent(
    $id: ID!
    $name: String!
    $email: String!
    $course: String!
  ) {
    updateStudent(id: $id, name: $name, email: $email, course: $course) {
      id
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation DeleteStudent($id: ID!) {
    deleteStudent(id: $id)
  }
`;
