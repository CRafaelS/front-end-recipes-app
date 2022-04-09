export const newStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export function getDoneRecipes(recipeId) {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  if (doneRecipes !== null) {
    const isRecipeDone = doneRecipes
      .some((doneRecipe) => doneRecipe.id === recipeId);

    return isRecipeDone;
  }
}

export default getDoneRecipes;

export function getMealsInProgress(recipeId) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (inProgressRecipes !== null) {
    if (inProgressRecipes.meals[recipeId]) {
      return true;
    }
    return false;
  }
}

export function getDrinksInProgress(recipeId) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (inProgressRecipes !== null) {
    if (inProgressRecipes.cocktails[recipeId]) {
      return true;
    }
    return false;
  }
}

export function isBigEnough(value) {
  return value;
}
