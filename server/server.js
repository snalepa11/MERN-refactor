const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { join } = require('path');
const  db  = require('./config/connection.js');
const { authMiddleware } = require('./utils/auth.js');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schemas/index.js');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});


// if we're in production, serve client/build as static assets

// const startApolloServer = async () => {
//   await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());



  // app.use(routes);
 

  if (process.env.NODE_ENV === 'production') {
    app.use((join(__dirname, '../client/build')));

    app.get('/', (req, res) => {
      res.sendFile(join(__dirname, '../client/build/index.html'));
    });
  };

  const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    // server.applyMiddleware({ app });
    
    app.use('/graphql', expressMiddleware(server, {
      context: authMiddleware
    }));

    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}!`);
      
      })
    })
    };

// // Call the async function to start the server
startApolloServer(typeDefs, resolvers);
