export async function requestIngredientFromApi(typeOfFood, ingrediente) {
  try {
    const response = await fetch(
      `https://www.${typeOfFood}.com/api/json/v1/1/filter.php?i=${ingrediente}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function requestNameFromApi(typeOfFood, nome) {
  try {
    const response = await fetch(
      `https://www.${typeOfFood}.com/api/json/v1/1/search.php?s=${nome}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function requestFirstLetterFromApi(typeOfFood, primeiraLetra) {
  try {
    const response = await fetch(
      `https://www.${typeOfFood}.com/api/json/v1/1/search.php?f=${primeiraLetra}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function requestDetailsFromApi(typeOfFood, ID) {
  try {
    const response = await fetch(
      `https://www.${typeOfFood}.com/api/json/v1/1/search.php?f=${ID}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

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
