import { gql } from "apollo-server-express";

const userType = gql`
  extend type Query {
    users: String
    user: User
  }
  extend type Mutation {
    createUser: String
    login: String
  }
  extend type Subscription {
    _id: ID!
  }
  type User {
    _id: ID!
    name: String
    age: Int
  }
`;

export default userType;
