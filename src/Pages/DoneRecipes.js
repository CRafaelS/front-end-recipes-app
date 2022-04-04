import React, { useContext } from 'react';
import DoneRecipesButtons from '../Components/DoneRecipesButtons';
import DoneRecipesCard from '../Components/DoneRecipesCard';
import Header from '../Components/Header';
import doneRecipesContext from '../context/DoneRecipes';

function DoneRecipes() {
  const { doneRecipes, filter } = useContext(doneRecipesContext);

  return (
    <>
      <Header title="Done Recipes" />
      <DoneRecipesButtons />
      {doneRecipes
        .filter((recipe) => filter === 'all' || filter === recipe.type)
        .map((recipe, index) => (
          <DoneRecipesCard
            key={ recipe.id }
            index={ index }
            { ...recipe }
          />
        ))}
    </>
  );
}
export default DoneRecipes;
