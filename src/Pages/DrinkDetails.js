import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import myContext from '../context/myContext';

function DrinkDetails() {
  const history = useHistory();
  const { drinks } = useContext(myContext);
  const handleSubmit = () => {
    history.push(`/drinks/${drinks.drinks[0].idDrink}/in-progress`);
  };

  return (
    <div>
      <h1>DoneRecipes</h1>
      <button type="button" onClick={ handleSubmit }>Start</button>
    </div>
  );
}
export default DrinkDetails;
