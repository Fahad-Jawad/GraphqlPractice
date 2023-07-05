import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schemas/schema.js';
import  {Game}  from './Resolvers/Game.js';
import  {Query}  from './Resolvers/Query.js';
// const bodyParser = require("body-parser");
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = 4422;

// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

// app.use(require("./routes"));


const resolvers = {
 Game,
 Query
};


// const server = require("http").createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);