import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers($search: String!) {
    users(search: $search) {
      id
      name
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
