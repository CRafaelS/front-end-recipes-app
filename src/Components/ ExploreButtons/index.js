import React from 'react';
import { useHistory } from 'react-router-dom';

function ExploreButtons() {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        data-testid="explore-foods"
        onClick={ () => history.push('/explore/foods') }
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => history.push('/explore/drinks') }
      >
        Explore Drinks
      </button>
    </div>
  );
}
export default ExploreButtons;
