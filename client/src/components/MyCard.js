import React from 'react';
import '../App.css';

function MyCard(props) {
// Creating the URL link from recipe.title of the complexSearch results 
  const linkBody = props.title.replace(/\s+/g, '-').toLowerCase();
  console.log(linkBody);
  const recipeURL = `https://spoonacular.com/${linkBody}-${props.id}`
  console.log('props: ', props.id);

  return (
    <div>
      <div className="flex flex-row mt-10">
        <a className="flex flex-col items-center pt-3 mx-2 justify-center rounded-lg" href={recipeURL} target="blank">
          <div className="bg-yellow-400 w-full flex justify-center">
            <h4 className=" py-4" >{props.title}</h4>
          </div>
          <div className="mb-2">
            <img className="rounded-md h-54" src={props.image} alt={`Recipe ${props.id}`} />
          </div>
        </a>
        <a className="flex flex-col items-center pt-3 mx-2 justify-center rounded-lg" href={recipeURL} target="blank">
          {/* <div className="bg-yellow-400 w-full flex justify-center">
            <p className=" py-4" >{props.summary}</p>
          </div> */}
        </a>
      </div>
    </div>
  );
};

export default MyCard;