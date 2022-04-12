import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import myContext from '../../contexts/myContext';
import { Container, Img, Button, P } from './styledComponents';

export default function Cards() {
  const { foods, drinks } = useContext(myContext);
  const history = useHistory();
  const actualPath = useLocation();
  const RECIPES_LIMIT = 12;

  const handleCard = (id) => {
    if (actualPath.pathname === '/foods'
     || actualPath.pathname === '/explore/foods/nationalities') {
      history.push(`/foods/${id}`);
    }
    if (actualPath.pathname === '/drinks') {
      history.push(`/drinks/${id}`);
    }
  };

  return (
    <div>
      {foods.meals.length > 1 && (
        <Container>
          {foods.meals.slice(0, RECIPES_LIMIT).map((food, index) => (
            <Button
              data-testid={ `${index}-recipe-card` }
              key={ index }
              type="button"
              onClick={ () => handleCard(food.idMeal) }
            >
              <Img
                src={ food.strMealThumb }
                alt={ food.strMeal }
                data-testid={ `${index}-card-img` }
              />
              <P data-testid={ `${index}-card-name` }>{food.strMeal}</P>
            </Button>
          ))}
        </Container>
      )}
      {drinks.drinks.length > 1 && (
        <div>
          {drinks.drinks.slice(0, RECIPES_LIMIT).map((drink, index) => (
            <button
              data-testid={ `${index}-recipe-card` }
              key={ index }
              type="button"
              onClick={ () => handleCard(drink.idDrink) }
            >
              <Img
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
