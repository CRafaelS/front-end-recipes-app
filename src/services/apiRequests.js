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

export async function requesCategoriesFromApi(typeOfCategoy) {
  try {
    const response = await fetch(
      `https://www.${typeOfCategoy}.com/api/json/v1/1/list.php?c=list`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function requesClickCategoryFromApi(typeOfCategoy, buttonCategoy) {
  try {
    const response = await fetch(
      `https://www.${typeOfCategoy}.com/api/json/v1/1/filter.php?c=${buttonCategoy}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function requesNationalitiesFromApi() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}

export async function requestRecipeByNationalities(nationality) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function requestRandomRecipeFromApi(typeOfFood) {
  try {
    const response = await fetch(
      `https://www.${typeOfFood}.com/api/json/v1/1/random.php`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
