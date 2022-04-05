import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import recipesContext from '.';

function RecipesProvider({ children }) {
  const { Provider } = recipesContext;

  const [doneRecipes, setDoneRecipe] = useState([
    {
      id: '',
      type: '',
      nationality: '',
      category: '',
      alcoholicOrNot: '',
      name: '',
      image: '',
      doneDate: '',
      tags: [],
    },
  ]);
  const [favoriteRecipes, setFavoriteRecipe] = useState([
    {
      id: '',
      type: '',
      nationality: '',
      category: '',
      alcoholicOrNot: '',
      name: '',
      image: '',
    },
  ]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storagedDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const storagedFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (storagedDoneRecipes) {
      setDoneRecipe(storagedDoneRecipes);
    }
    if (storagedFavoriteRecipes) {
      setFavoriteRecipe(storagedFavoriteRecipes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  }, [doneRecipes]);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  const removeFavoriteRecipe = (index) => {
    setFavoriteRecipe((state) => (
      [...state.slice(0, index), ...state.slice(index + 1)]
    ));
  };

  const contextValue = {
    doneRecipes,
    favoriteRecipes,
    filter,
    setDoneRecipe,
    setFavoriteRecipe,
    setFilter,
    removeFavoriteRecipe,
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
