import React, { useContext } from 'react';
import recipesContext from '../contexts/recipes';
import Header from '../Components/Header';
import RecipeTypeButtons from '../Components/RecipeTypeButtons';
import FavoriteRecipesCard from '../Components/FavoriteRecipesCard';

function FavoriteRecipes() {
  const { favoriteRecipes, filter } = useContext(recipesContext);

  return (
    <>
      <Header title="Favorite Recipes" />
      <RecipeTypeButtons />
      {favoriteRecipes
        .filter((recipe) => filter === 'all' || filter === recipe.type)
        .map((recipe, index) => (
          <FavoriteRecipesCard
            key={ recipe.id }
            index={ index }
            { ...recipe }
          />
        ))}
    </>
  );
}
export default FavoriteRecipes;
