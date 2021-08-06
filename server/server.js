const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require ('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

const app = express();

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets - IF WE NEED
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// (path.join(publicPath, 'index.html')); can do as well
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 GraphQL is now listening on localhost:${PORT}${server.graphqlPath}`));
});
