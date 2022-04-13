import React from 'react';
import propTypes from 'prop-types';
import Food from '../Components/RecipeInProgress/Food';

function ProgressFoodRecipe({ match: { params } }) {
  return (
    <div>
      <Food { ...params } />
    </div>
  );
}

ProgressFoodRecipe.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape().isRequired,
  }).isRequired,
};

export default ProgressFoodRecipe;
