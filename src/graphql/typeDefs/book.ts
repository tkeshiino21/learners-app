import { gql } from "apollo-server-express";

const bookType = gql`
  extend type Query {
    books: [Book]
    book: [Book]
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
  type Book {
    _id: ID
    title: String
    author: String
  }
`;

export default bookType;
