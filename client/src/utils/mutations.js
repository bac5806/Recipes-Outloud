import { gql } from '@apollo/client';

export const SIGNIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
        recipeCount
        savedRecipes {
          recipeId
          image
          title

        }
      }
    }
  }
`;

// FOR SIGNIN USER AND ADD_USER //
// Add these fields to the savedRecipes array as we build 
// out the models with data that we want from the API call
// authors
// description
// link

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
    ) {
      addUser(
        firstName: $firstName
        lastName: $lastName
        username: $username
        email: $email
        password: $password
      ) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
        recipeCount
        savedRecipes {
          recipeId
          image
          title

        }
      }
    }
  }
`;

export const SAVE_RECIPE = gql`
  mutation saveRecipe($input: RecipeInput!) {
    saveRecipe(input: $input) {
      _id
      username
      email
      savedRecipes {
        recipeId
        image
        title

      }
    }
  }
`;

export const REMOVE_RECIPE = gql`
  mutation removeRecipe($recipeId: Int!) {
    removeRecipe(recipeId: $recipeId){
      _id
      username
      email
      savedRecipes {
        recipeId
        image
        title

      }
    }
  }
`;