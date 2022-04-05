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
