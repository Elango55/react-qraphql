import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
  query {
    students {
      id
      name
      age
      course
    }
  }
`;

export const ADD_STUDENT = gql`
  mutation ($name: String!, $age: Int!, $course: String!) {
    addStudent(name: $name, age: $age, course: $course) {
      id
    }
  }
`;

export const UPDATE_STUDENT = gql`
  mutation ($id: ID!, $name: String!, $age: Int!, $course: String!) {
    updateStudent(id: $id, name: $name, age: $age, course: $course) {
      id
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation ($id: ID!) {
    deleteStudent(id: $id)
  }
`;
