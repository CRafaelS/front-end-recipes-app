import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
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

  useEffect(() => {
    const storagedDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (storagedDoneRecipes) {
      setDoneRecipes(storagedDoneRecipes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  }, [doneRecipes]);

  const contextValue = {
    doneRecipes,
    setDoneRecipes,
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
