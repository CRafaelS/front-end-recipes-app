import React, { useContext } from 'react';
import doneRecipesContext from '../../context/DoneRecipes';

function DoneRecipesButtons() {
  const { setFilter } = useContext(doneRecipesContext);
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

export default DoneRecipesButtons;
