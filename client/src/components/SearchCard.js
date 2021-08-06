import React from 'react';
import '../App.css';
// import placeholder from '../images/placeholder.jpg';

function SearchCard(props) {
  // Creating the URL link from recipe.title of the complexSearch results 
  const linkBody = props.title.replace(/\s+/g, '-').toLowerCase();
  console.log(linkBody);
  const recipeURL = `https://spoonacular.com/${linkBody}-${props.id}`
  console.log('props: ', props.id);

  return (

    <div className="flex flex-row items-start mt-10">
      <a className="flex flex-col items-center pt-3 mx-2 justify-center rounded-lg" href={recipeURL} target="blank">
        <div className="bg-wYellow flex flex-col justify-center items-center w-full font-mono">
          <img className="rounded-md h-48" src={props.image} alt={`Recipe ${props.id}`} />
          <h4 className="py-4 font-mono flex justify-center pl-4" >{props.title}</h4>
        </div>
      </a>
    </div>
  );
};

export default SearchCard;
