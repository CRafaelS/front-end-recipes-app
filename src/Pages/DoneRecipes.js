import React, { useContext } from 'react';
import RecipeTypeButtons from '../Components/RecipeTypeButtons';
import DoneRecipesCard from '../Components/DoneRecipesCard';
import Header from '../Components/Header';
import recipesContext from '../contexts/recipes';

function DoneRecipes() {
  const { doneRecipes, filter } = useContext(recipesContext);

  return (
    <>
      <Header title="Done Recipes" />
      <RecipeTypeButtons />
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
