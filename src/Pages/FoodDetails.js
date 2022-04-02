import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import myContext from '../context/myContext';

function FoodDetails() {
  const history = useHistory();
  const { foods } = useContext(myContext);
  const handleSubmit = () => {
    history.push(`/foods/${foods.meals[0].idMeal}/in-progress`);
  };
  return (
    <div>
      <h1>DoneRecipes</h1>
      <button type="button" onClick={ handleSubmit }>Start</button>
    </div>
  );
}
export default FoodDetails;
