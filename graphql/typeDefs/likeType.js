import { gql } from "apollo-server-express";

const likeType = gql`
  extend type Query {
    likes: String
    like: Like
  }
  extend type Mutation {
    createLike: String
    deleteLike: String
  }
  type Like {
    _id: ID!
    rate: Int
  }
`;

export default likeType;
