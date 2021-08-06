import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import SpeakButton from '../components/SpeakButton';
import { summarySearch } from '../utils/API';

const Summary = () => {

  const { id: recipeId } = useParams();
  console.log(recipeId)
  const [recipeData, setRecipeData] = useState({});
  console.log(recipeData)
  const [isloading, setIsLoading] = useState(false)

  const linkBody = recipeData.title?.replace(/\s+/g, '-').toLowerCase();
  console.log(linkBody);
  const recipeURL = `https://spoonacular.com/${linkBody}-${recipeId}`

  useEffect(() => {

    async function handleGetSummary() {
      setIsLoading(true)
      try {
        const summaryResponse = await summarySearch(recipeId);
        // console.log(summaryResponse)
        const result = await summaryResponse.json();
        setRecipeData(result);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    handleGetSummary();
  }, [recipeId])

  return (

    <div>
      <Navbar className="flex w-1/3 " />
      <div className="flex flex-row mt-10">
        <a className="flex flex-col items-center pt-3 mx-2 justify-center rounded-lg" href={recipeURL} target="blank">
          <div className="bg-yellow-400 w-full flex justify-center">
            <h4 className=" py-4" >{recipeData?.title}</h4>
          </div>
        </a>
        <div className="bg-yellow-400 w-full flex justify-center">

        <p dangerouslySetInnerHTML={{ __html: recipeData?.summary }}></p>

        <SpeakButton wordsToSpeak={recipeData?.summary} />

        </div>
      </div>
    </div>

  );
}

export default Summary;