import { gql } from "apollo-server-express";

const bookType = gql`
  extend type Query {
    coffees: [Book!]!
  }
  extend type Mutation {
    addBooks(book: addBookInput): Book
    addBook(book: addBookInput): Book
  }
  input addBookInput {
    title: String!
    author: String!
  }
  input quryBookInput {
    title: String!
  }
  type Coffe {
    _id: ID
    : String
    author: String
  }
`;

export default bookType;
