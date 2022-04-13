export const verifyDoneRecipe = (recipeId) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  if (doneRecipes) {
    return doneRecipes.some((doneRecipe) => doneRecipe.id === recipeId);
  }
};

export const verifyInProgressRecipe = (recipeId) => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (!inProgressRecipes) {
    return false;
  }

  return Boolean(inProgressRecipes.meals[recipeId]
    || inProgressRecipes.cocktails[recipeId]);
};

export const resumeIngredients = (recipe) => {
  const recipeEntries = Object.entries(recipe);
  return recipeEntries.filter(([prop, value]) => (
    prop.includes('Ingredient') && value
  )).map(([, value]) => value);
};

export const resumeIngredientMeasures = (recipe) => {
  const recipeEntries = Object.entries(recipe);
  return recipeEntries.filter(([prop, value]) => (
    prop.includes('Measure') && value
  )).map(([, value]) => value);
};
