import React, { useContext } from 'react';
import recipesContext from '../../contexts/recipes';

function RecipeTypeButtons() {
  const { setFilter } = useContext(recipesContext);
  return (
    <div className="done-recipes-buttons">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => { setFilter('all'); } }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => { setFilter('food'); } }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => { setFilter('drink'); } }
      >
        Drinks
      </button>
    </div>
  );
}

export default RecipeTypeButtons;
