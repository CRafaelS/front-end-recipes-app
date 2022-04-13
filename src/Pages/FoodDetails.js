import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import copy from 'clipboard-copy';
import recipesContext from '../contexts/recipes';
import { requestMeal, requestRecommendedDrinks } from '../services/apiRequests';
import {
  resumeIngredientMeasures,
  resumeIngredients,
  verifyDoneRecipe,
  verifyInProgressRecipe,
} from '../helpers/recipes';
import shareIcon from '../images/shareIcon.svg';

import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import {
  Image,
  ShareButton,
  RecipeTitle,
  TitlesDetails,
  TextDetails,
  ButtonsDiv,
  Container,
  Button,
  Img,
  P,
} from '../StyledComponents/FoodDetailsStyle';

function FoodDetails({ match: { params: { id } } }) {
  const { favoriteRecipes, toogleFavoriteMeal } = useContext(recipesContext);

  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [ingredientMeasures, setIngredientMeasures] = useState([]);
  const [recomendedDrinks, setRecommendedDrinks] = useState([]);
  const [isDone, setDone] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [isShared, setShare] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const RECOMENDED_LIMIT = 6;
    requestMeal(id).then(({ meals }) => setMeal(meals[0]));
    requestRecommendedDrinks().then(({ drinks }) => {
      setRecommendedDrinks(drinks.slice(0, RECOMENDED_LIMIT));
    });
    setInProgress(verifyInProgressRecipe(id));
    setDone(verifyDoneRecipe(id));
  }, [id, setRecommendedDrinks]);

  useEffect(() => {
    setIngredients(resumeIngredients(meal));
    setIngredientMeasures(resumeIngredientMeasures(meal));
  }, [meal]);

  const shareRecipe = () => {
    setShare(true);
    copy(`http://localhost:3000/foods/${id}`);
  };

  return (
    <div>
      {meal.idMeal && (
        <div>
          <Image
            src={ meal.strMealThumb }
            alt={ meal.strMeal }
            data-testid="recipe-photo"
          />
          <main>
            <div>
              <RecipeTitle data-testid="recipe-title">
                {meal.strMeal}
              </RecipeTitle>
              <ButtonsDiv>
                <ShareButton type="button" onClick={ shareRecipe }>
                  {isShared ? (
                    'Link copied!'
                  ) : (
                    <img
                      data-testid="share-btn"
                      src={ shareIcon }
                      alt="share"
                    />
                  )}
                </ShareButton>
                <input
                  type="image"
                  src={
                    favoriteRecipes.some((favoriteRecipe) => favoriteRecipe.id === id)
                      ? blackHeartIcon
                      : whiteHeartIcon
                  }
                  alt="Favorite Icon"
                  data-testid="favorite-btn"
                  onClick={ () => toogleFavoriteMeal(meal) }
                />
              </ButtonsDiv>
            </div>
            <TextDetails data-testid="recipe-category">
              {meal.strCategory}
            </TextDetails>
            <TitlesDetails>Ingredients</TitlesDetails>
            <TextDetails>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li
                    key={ ingredient }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    {`${ingredient} - ${ingredientMeasures[index]}`}
                  </li>
                ))}
              </ul>
            </TextDetails>
            <Container>
              <TitlesDetails>Instructions</TitlesDetails>
              <TextDetails data-testid="instructions">
                {meal.strInstructions}
              </TextDetails>
            </Container>
            <Container>
              <TitlesDetails>Video</TitlesDetails>
              <iframe
                title="video"
                src={ `https://www.youtube.com/embed/${
                  meal.strYoutube.split('watch?v=')[1]
                }` }
                data-testid="video"
              />
            </Container>
            <TitlesDetails>Recommended</TitlesDetails>
            <Container>
              {recomendedDrinks.map(({
                idDrink,
                strDrink,
                strDrinkThumb,
              }, index) => (
                <Button
                  className="container"
                  data-testid={ `${index}-recomendation-card` }
                  key={ idDrink }
                >
                  <Img
                    src={ strDrinkThumb }
                    alt={ strDrink }
                    data-testid={ `${index}-card-img` }
                  />
                  <P data-testid={ `${index}-recomendation-title` }>{strDrink}</P>
                </Button>
              ))}
            </Container>
            {isDone ? (
              ''
            ) : (
              <button
                type="button"
                data-testid="start-recipe-btn"
                onClick={ () => history.push(
                  `${id}/in-progress`,
                ) }
              >
                {inProgress ? 'Continue Recipe' : 'Start Recipe'}
              </button>
            )}
          </main>
        </div>
      )}
    </div>
  );
}

FoodDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  }).isRequired,
};

export default FoodDetails;
