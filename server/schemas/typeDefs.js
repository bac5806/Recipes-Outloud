const { gql } = require ('apollo-server-express');

const typeDefs = gql`
  
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    recipeCount: Int
    savedRecipes: [Recipe]    
  }

  type Recipe {
    _id: ID!
    recipeId: Int!
    image: String!
    title: String!

  }

  input RecipeInput {
    recipeId: Int!
    image: String!
    title: String!

  } 

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User 
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    signin(email: String!, password: String!): Auth
    
    addUser(firstName: String!, lastName: String!, username: String!, email: String! password: String!): Auth

    saveRecipe(input: RecipeInput): User

    removeRecipe(recipeId: Int!): User
  }
  `;
  module.exports = typeDefs;