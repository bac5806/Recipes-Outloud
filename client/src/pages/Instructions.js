import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import SpeakButton from '../components/SpeakButton';
import { recipeInformation } from '../utils/API';

const Instructions = () => {

  const { id: recipeId } = useParams();
  // create state for holding returned spoonacular api data
  const [recipe, setRecipe] = useState({});

  useEffect(async () => {

    try {
      const recipeResponse = await recipeInformation(recipeId)
      const recipeData = await recipeResponse.json()

      let ingredientsSpoken = ''
      recipeData.extendedIngredients.forEach((ingredient, index) => {
        ingredientsSpoken = ingredientsSpoken + ingredient.originalString + ", "
      });
      recipeData.ingredientsSpoken = ingredientsSpoken


      console.log(recipeData)
      setRecipe(recipeData);

    } catch (e) {
      console.error(e);
    }
  }, [recipeId]);

  return (

    <>
      <div>
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full bg-yellow-400 text-gray-800  p-5">
          <h2 className="text-xl font-bold mb-2 flex justify-center">
            {recipe.title
              ? `Viewing ${recipe.title}  `
              : 'YOU SO HUNGRY YOU MISSED THE FOOD'}
          </h2>
          {
            recipe.summary && (
              <>
                <SpeakButton wordsToSpeak={recipe.summary} />
                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
              </>
            )
          }
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-2/3 bg-darkBlue text-gray-50 text-xl p-5">

            {recipe.instructions && (
              <>

                <h2 className="flex justify-center font-bold mb-2 " >Instructions</h2>

                <SpeakButton wordsToSpeak={recipe.instructions} />

                <div dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
              </>
            )
            }
          </div>
          <div className="w-full md:w-1/3 bg-green-400 text-gray-800 text-xl p-5">
            {recipe.extendedIngredients && (
              <>
                <h2 className="flex justify-center font-bold mb-2 ">Ingredients</h2>
                <SpeakButton wordsToSpeak={recipe.ingredientsSpoken} />
                {recipe.extendedIngredients.map((ingredient) => {
                  return (
                    // <p key={ingredient.id}>{ingredient.measures.us.amount} {ingredient.measures.us.unitShort} {ingredient.name} </p>
                    <p key={ingredient.id}> {ingredient.originalString} </p>
                      )
                })}
              
              </>
                  )
                }
          </div>
        </div>

        </div>

    </>
      )
}

      export default Instructions;