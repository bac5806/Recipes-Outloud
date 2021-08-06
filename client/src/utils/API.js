// call spoonacular api
export function searchRandomRecipe() {
    return fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=4`);
  };

// export function complexSearch(entryA) {
//   return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3a5493c1e62a49d08a1e8e591a17b8d7&query=${entryA}`);
// };

export function complexSearch(entryA) {
  return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${entryA}`);
};


export function complexSearchCal(entryA, entryB) {
  return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${entryA}&maxCalories=${entryB}`);
};

export function summarySearch(id) {
  return fetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
};



export function recipeInformation(id) {
  return fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
};

// export function recipeIngredientsById(id) {
//   return fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
// };

// export function recipeSummaryById(id) {
//   return fetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
// };