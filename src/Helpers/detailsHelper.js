export const newStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export function getDoneRecipes(recipeId) {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  let isRecipeDone = false;

  if (doneRecipes !== null) {
    isRecipeDone = doneRecipes
      .some((doneRecipe) => doneRecipe.id === recipeId);
  }

  return isRecipeDone;
}

export default getDoneRecipes;

export function getMealsInProgress(recipeId) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  let isInProgress;

  if (inProgressRecipes !== null) {
    if (inProgressRecipes.meals[recipeId]) {
      isInProgress = true;
    } else {
      isInProgress = false;
    }
  }
  console.log(isInProgress, recipeId, 'kakak');
  return isInProgress;
}

export function getDrinksInProgress(recipeId) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  let isInProgress;

  if (inProgressRecipes !== null) {
    if (inProgressRecipes.cocktails[recipeId]) {
      isInProgress = true;
    } else {
      isInProgress = false;
    }
  }
  return isInProgress;
}

export function isBigEnough(value) {
  return value;
}
