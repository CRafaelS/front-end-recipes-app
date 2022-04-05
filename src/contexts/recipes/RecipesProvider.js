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

  const contextValue = {
    doneRecipes,
    favoriteRecipes,
    filter,
    setDoneRecipe,
    setFavoriteRecipe,
    setFilter,
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
