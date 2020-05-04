import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import resolvers from "./graphql/resolvers/index";
import typeDefs from "./graphql/typeDefs/index";
import { ApolloServer } from "apollo-server-express";

const { APP_PORT = 7000, NODE_ENV = "development" } = process.env;

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-hsx7m.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch(err => {
    console.log("err:", err);
  });

const IN_PROD = NODE_ENV === "production";

const server = new ApolloServer({ typeDefs, resolvers, playground: !IN_PROD });

const app: express.Express = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

server.applyMiddleware({ app });

app.listen({ port: APP_PORT || 7000 }, () => {
  console.log(`🚀  Server ready at 8000`);
});
