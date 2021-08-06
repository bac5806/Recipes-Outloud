// NOTE TO TEAM: SEARCH.JS HAS API SEARCH AND SAVE_RECIPE FUNCTIONALITY.
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SAVE_RECIPE } from '../utils/mutations';
import Auth from '../utils/auth';
import UiDropdown from '../components/UiDropdown';
import SearchCard from '../components/SearchCard';
import globalContext from '../utils/globalContext';
import Navbar from '../components/Navbar';

import { complexSearchCal } from '../utils/API';


import { saveRecipeIds, getSavedRecipeIds } from '../utils/localStorage';

const SearchRecipes = () => {

  // state for spoonacular api data
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const [saveRecipe, { error, data }] = useMutation(SAVE_RECIPE);

  // state for search field data (entryA)
  const [inputA, setInputA] = useState('');

  const { valueDrop } = useContext(globalContext);

  // state for saved recipeId values (local storage)
  const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds());

  // useEffect to SAVE `savedRecipeIds` LIST To Local Storage on component unmount
  useEffect(() => {
    return () => saveRecipeIds(savedRecipeIds);
  });

  // SEARCH FOR RECIPES and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!inputA) {
      return false;
    }

    console.log(inputA);
    console.log(valueDrop);

    try {
      let complexResponse = await complexSearchCal(inputA, valueDrop);

      if (!complexResponse.ok) {
        throw new Error('something went wrong!');
      }

      const { results } = await complexResponse.json();


      const complexData = results.map((recipe) => ({
        recipeId: recipe.id,
        title: recipe.title,
        image: recipe.image || '../images/placeholder.jpg',

      }));

      console.log(complexData);
      setSearchedRecipes(complexData);
      setInputA('');
    } catch (e) {
      console.error(e);
    }
  };

  // SAVE a recipe to MyCollection
  const handleSaveRecipe = async (recipeId) => {
    
    // find the recipe in `searchedRecipes` state by the matching id
    const recipeToSave = searchedRecipes.find((recipe) => recipe.recipeId === recipeId);
    // get token
    console.log(recipeToSave);
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      const { data } = await saveRecipe({
        variables: { input: recipeToSave },
      });

      // if recipe successfully saves to user's account, save recipe id to state
      console.log(savedRecipeIds);
      setSavedRecipeIds([...savedRecipeIds, recipeToSave.recipeId]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex h-auto mr-40 ml-40 pb-10">

      <div className="flex h-auto w-2/3" id="Search">
        <div className="flex flex-col bg-darkBlue w-full rounded h-auto">

          <h2 className="mt-10 ml-10 text-xl font-mono text-offWhite text-3xl">
            {searchedRecipes.length
              ? `Viewing ${searchedRecipes.length} results:`
              : 'Welcome to the Search Page!'}
          </h2>

          <figure className="flex text-black flex-wrap justify-center">
            {searchedRecipes.map((recipe) => (
              <div className="flex flex-col items-center ">
                <SearchCard key={recipe.recipeId} id={recipe.recipeId} title={recipe.title} image={recipe.image} />

                <button
                  // disabled={savedRecipeIds?.some((savedRecipeId) => savedRecipeId === recipe.recipeId)}
                  className='bg-blue-800 rounded text-white w-1/3 clear-both mb-10'
                  onClick={() => handleSaveRecipe(recipe.recipeId)}>
                  {savedRecipeIds?.some((savedRecipeId) => savedRecipeId === recipe.recipeId)
                    ? 'Recipe has been saved!'
                    : 'Save this Recipe!'}
                </button>

              </div>
            ))}
          </figure>
        </div>
      </div>

      <div className="w-1/3" id="">
        <Navbar />
        <div className="flex flex-col bg-wYellow">
          <h2 className="flex justify-center pt-2 font-mono text-xl">Search For Recipes Here!</h2>
          <form onSubmit={handleFormSubmit} >
            <div className="flex-row space-between my-2">
              <div className="flex flex-row justify-center ">
                <label className="font-mono text-lg" for="complexSearch">Key Word:</label>

                <input
                  className="form-input w-1/2 ml-2 rounded"
                  type="text"
                  placeholder=" soup?"
                  value={inputA}
                  onChange={(e) => setInputA(e.target.value)}
                />

                {/* UiDropdown.js component is called */}

              </div>
              <UiDropdown />

              <div className="flex justify-center mt-6 mb-5">
                <button className=" bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">Search</button>
              </div>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default SearchRecipes;