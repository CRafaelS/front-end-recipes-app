import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

export default function RecipesInProgressProvider({ children }) {
  const [inputs, setInputs] = useState({
    search: '',
    selectedOption: '',
  });
  const [foods, setFoods] = useState({
    meals: [],
  });
  const [drinks, setDrinks] = useState({
    drinks: [],
  });
  const [progress, setProgress] = useState({
    progress: [],
  });

  const [ingredients, setIngredients] = useState([]);

  function handleChangeCheck({ target }) {
    const { value } = target;
    const isChecked = target.checked;
    if (isChecked) {
      setIngredients([...ingredients, value]);
    } else {
      const index = ingredients.indexOf(value);
      setIngredients([
        ...ingredients.slice(0, index),
        ...ingredients.slice(index + 1),
      ]);
    }
  }

  // ######################

  const savedRecipeFromLocalStorage = JSON.parse(
    localStorage.getItem('favoriteRecipes') || '[]',
  );
  const [favoriteRecipes, setFavoriteRecipe] = useState(
    savedRecipeFromLocalStorage,
  );
  const saveRecipeFoodInState = (id) => {
    if (!favoriteRecipes.some((item) => item.id === id)) {
      const obj = {
        id: foods.meals[0].idMeal,
        type: 'food',
        nationality: foods.meals[0].strArea,
        category: foods.meals[0].strCategory,
        alcoholicOrNot: '',
        name: foods.meals[0].strMeal,
        image: foods.meals[0].strMealThumb,
      };
      setFavoriteRecipe([...favoriteRecipes, obj]);
    } else { setFavoriteRecipe(favoriteRecipes.filter((item) => item.id !== id)); }
  };

  const saveRecipeDrinkInState = (id) => {
    if (!favoriteRecipes.some((item) => item.id === id)) {
      const obj = {
        id: drinks.drinks[0].idDrink,
        type: 'drink',
        nationality: '',
        category: drinks.drinks[0].strCategory,
        alcoholicOrNot: drinks.drinks[0].strAlcoholic,
        name: drinks.drinks[0].strDrink,
        image: drinks.drinks[0].strDrinkThumb,
      };
      setFavoriteRecipe([...favoriteRecipes, obj]);
    } else { setFavoriteRecipe(favoriteRecipes.filter((item) => item.id !== id)); }
  };

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  const context = {
    inputs,
    setInputs,
    foods,
    setFoods,
    drinks,
    setDrinks,
    progress,
    setProgress,
    favoriteRecipes,
    setFavoriteRecipe,
    saveRecipeFoodInState,
    saveRecipeDrinkInState,
    handleChangeCheck,
    ingredients,
    setIngredients,
  };
  return <myContext.Provider value={ context }>{children}</myContext.Provider>;
}
RecipesInProgressProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
