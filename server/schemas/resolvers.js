const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    
  Query: {
    // getSingleUser - By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, arg, context) => {

      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {

    addUser: async (parent, { firstName, lastName, username, email, password }, context) => {
      const user = await User.create({ firstName, lastName, username, email, password });
      const token = signToken(user);    
      return { token, user };
    },

    // login(email: String!, password: String!): Auth

    signin: async(parent, { email, password }, context) => {
      const user = await User.findOne({ email });
      
      if(!user) {
        throw new AuthenticationError('No user with this email found!');
      }
      const correctPw = await user.isCorrectPassword(password);
      
      if (!correctPw) {
        throw new AuthenticationError('Incorrect Password!');
      }
      
      const token = signToken(user);
      return { token, user };
    },

    saveRecipe: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              savedRecipes: args.input
            }
          },
          {
            new: true,
            runValidators: true
          }
        );
      }
      throw new AuthenticationError('You need to be signed in!');
    },

    removeRecipe: async (parent, { recipeId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
        { _id: context.user._id},
        {
          $pull: {
            savedRecipes: { recipeId: recipeId }
          }
        },
        { new: true }
        );
      }
      throw new AuthenticationError('You need to be signed in!');
    },
  },
};

module.exports = resolvers;