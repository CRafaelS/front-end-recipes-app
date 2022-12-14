import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import copy from 'clipboard-copy';
import doneRecipesContext from '.';

function DoneRecipesProvider({ children }) {
  const { Provider } = doneRecipesContext;

  const [doneRecipes, setDoneRecipes] = useState([
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
  const [isShared, setShare] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storagedDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (storagedDoneRecipes) {
      setDoneRecipes(storagedDoneRecipes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  }, [doneRecipes]);

  const shareRecipe = (id, type) => {
    setShare(true);
    copy(`http://localhost:3000/${type}s/${id}`);
  };

  const contextValue = {
    doneRecipes,
    isShared,
    filter,
    setDoneRecipes,
    shareRecipe,
    setFilter,
  };

  return (
    <Provider value={ contextValue }>
      {children}
    </Provider>
  );
}

DoneRecipesProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default DoneRecipesProvider;
