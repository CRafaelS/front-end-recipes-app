import React, { useContext, useEffect, useState } from 'react';

import copy from 'clipboard-copy';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import recipesContext from '../../contexts/recipes';
import { requestMeal } from '../../services/apiRequests';
import { resumeIngredients } from '../../helpers/recipes';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

import {
  Image,
  TitlesDetails,
  RecipeTitle,
  Container,
  Inputs,
  TextDiv,
  ButtonsDiv,
} from './styledComponents';

function Food({ id }) {
  const {
    inProgressRecipes,
    favoriteRecipes,
    toogleFavoriteMeal,
    toogleInProgressMealIngredient,
    finishMealRecipe,
  } = useContext(recipesContext);

  const progress = inProgressRecipes.meals[id] || [];
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [isShared, setShare] = useState(false);

  const history = useHistory();

  useEffect(() => {
    requestMeal(id).then((data) => setMeal(data.meals[0]));
  }, [id]);

  useEffect(() => {
    setIngredients(resumeIngredients(meal));
  }, [meal]);

  const shareRecipe = () => {
    setShare(true);
    copy(`http://localhost:3000/foods/${id}`);
  };

  return (
    <div>
      {meal.idMeal && (
        <Container>
          <Image
            data-testid="recipe-photo"
            src={ meal.strMealThumb }
            alt="Receita em progresso"
          />
          <TitlesDetails data-testid="recipe-title">
            {meal.strMeal}
          </TitlesDetails>
          <ButtonsDiv>
            <button type="button" onClick={ shareRecipe }>
              {isShared ? (
                'Link copied!'
              ) : (
                <img data-testid="share-btn" src={ shareIcon } alt="share" />
              )}
            </button>

            <button
              type="button"
              onClick={ () => toogleFavoriteMeal(meal) }
            >
              <img
                data-testid="favorite-btn"
                src={
                  favoriteRecipes.some((favoriteRecipe) => favoriteRecipe.id === id)
                    ? blackHeartIcon
                    : whiteHeartIcon
                }
                alt="favorite"
              />
            </button>

          </ButtonsDiv>
          <Inputs>
            {ingredients.map((ingredient, index) => (
              <label
                data-testid={ `${index}-ingredient-step` }
                key={ ingredient }
                htmlFor={ ingredient }
              >
                <input
                  id={ ingredient }
                  type="checkbox"
                  checked={ progress.includes(ingredient) }
                  value={ ingredient }
                  onChange={ () => toogleInProgressMealIngredient(id, ingredient) }
                />
                {ingredient}
              </label>
            ))}
          </Inputs>

          <RecipeTitle data-testid="recipe-category">
            {meal.strCategory}
          </RecipeTitle>

          <TextDiv data-testid="instructions">
            {meal.strInstructions}
          </TextDiv>

          <button
            data-testid="finish-recipe-btn"
            type="button"
            disabled={ progress.length !== ingredients.length }
            onClick={ () => {
              history.push('/done-recipes');
              finishMealRecipe(meal);
            } }
          >
            Finish Recipe
          </button>

        </Container>
      )}
    </div>
  );
}

Food.propTypes = {
  id: propTypes.string.isRequired,
};

export default Food;
