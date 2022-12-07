import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { requestRandomRecipeFromApi } from '../../services/apiRequests';
import {
  Button,
  Container,
} from './styledComponents';

function ExploreDrinksOrFoods() {
  const actualPath = useLocation();
  const history = useHistory();
  const ROTE_EXPLORE_FOODS = '/explore/foods';
  const ROTE_EXPLORE_DRINKS = '/explore/drinks';
  const ROTE_FOODS_INGREDIENTS = '/explore/foods/ingredients';
  const ROTE_DRINKS_INGREDIENTS = '/explore/drinks/ingredients';

  const handleIgredient = () => {
    if (actualPath.pathname === ROTE_EXPLORE_FOODS) {
      history.push(ROTE_FOODS_INGREDIENTS);
    }
    if (actualPath.pathname === ROTE_EXPLORE_DRINKS) {
      history.push(ROTE_DRINKS_INGREDIENTS);
    }
  };

  const handleSurprise = async () => {
    if (actualPath.pathname === ROTE_EXPLORE_FOODS) {
      const surpriseFoodData = await requestRandomRecipeFromApi('themealdb');
      history.push(`/foods/${surpriseFoodData.meals[0].idMeal}`);
    }
    if (actualPath.pathname === ROTE_EXPLORE_DRINKS) {
      const surpriseDrinkData = await requestRandomRecipeFromApi('thecocktaildb');
      console.log(surpriseDrinkData);
      history.push(`/drinks/${surpriseDrinkData.drinks[0].idDrink}`);
    }
  };

  return (
    <Container>
      <Button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ handleIgredient }
      >
        By Ingredient
      </Button>
      {actualPath.pathname === '/explore/foods' && (
        <Button
          className="Button"
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </Button>
      )}
      <Button
        className="Button"
        type="button"
        data-testid="explore-surprise"
        onClick={ handleSurprise }
      >
        Surprise me!
      </Button>
    </Container>
  );
}
export default ExploreDrinksOrFoods;
