import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import recipesContext from '.';

function RecipesProvider({ children }) {
  const { Provider } = recipesContext;

  const [doneRecipes, setDoneRecipe] = useState([]);
  const [favoriteRecipes, setFavoriteRecipe] = useState([]);
  const [inProgressRecipes, setInProgressRecipes] = useState({
    cocktails: {},
    meals: {},
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storagedDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const storagedFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const storagedInProgressRecipes = (
      JSON.parse(localStorage.getItem('inProgressRecipes'))
    );
    if (storagedDoneRecipes) {
      setDoneRecipe(storagedDoneRecipes);
    }
    if (storagedFavoriteRecipes) {
      setFavoriteRecipe(storagedFavoriteRecipes);
    }
    if (storagedInProgressRecipes) {
      setInProgressRecipes(storagedInProgressRecipes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  }, [doneRecipes]);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [inProgressRecipes]);

  const addFavoriteMeal = ({
    idMeal,
    strArea,
    strCategory,
    strMeal,
    strMealThumb,
  }) => {
    setFavoriteRecipe((state) => [...state, {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    }]);
  };

  const removeFavoriteRecipe = (id) => {
    setFavoriteRecipe((state) => (
      state.filter((favoriteRecipe) => favoriteRecipe.id !== id)
    ));
  };

  const toogleFavoriteMeal = (meal) => {
    const { idMeal } = meal;
    if (favoriteRecipes.some(({ id }) => id === idMeal)) {
      removeFavoriteRecipe(idMeal);
    } else {
      addFavoriteMeal(meal);
    }
  };

  const toogleInProgressMealIngredient = (mealId, ingredient) => {
    if (!inProgressRecipes.meals[mealId]) {
      inProgressRecipes.meals[mealId] = [];
    }
    if (inProgressRecipes.meals[mealId].includes(ingredient)) {
      setInProgressRecipes((state) => ({
        ...state,
        meals: {
          ...state.meals,
          [mealId]: state.meals[mealId]
            .filter((stateIngredient) => stateIngredient !== ingredient),
        },
      }));
    } else {
      setInProgressRecipes((state) => ({
        ...state,
        meals: {
          ...state.meals,
          [mealId]: [...state.meals[mealId], ingredient],
        },
      }));
    }
  };

  const finishMealRecipe = (({
    idMeal,
    strArea,
    strCategory,
    strMeal,
    strMealThumb,

  }) => {
    setDoneRecipe((state) => ([...state, {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
      doneDate: new Date().toLocaleDateString(),
      // source: https://pt.stackoverflow.com/questions/6526/como-formatar-data-no-javascript | Consulta em 13/04/2022
      tags: [],
    }]));
  });

  const contextValue = {
    doneRecipes,
    favoriteRecipes,
    inProgressRecipes,
    filter,
    setDoneRecipe,
    finishMealRecipe,
    toogleFavoriteMeal,
    setFavoriteRecipe,
    setFilter,
    removeFavoriteRecipe,
    toogleInProgressMealIngredient,
  };

  return (

    <Provider value={ contextValue }>
      {children}
    </Provider>
  );
}
RecipesProvider.propTypes = {
  children: propTypes.node.isRequired,
};
export default RecipesProvider;
