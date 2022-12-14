import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';
import { Image, RecipeTitle, TitlesDetails } from './styledComponents';

function DoneRecipesCard({
  id,
  name,
  type,
  image,
  nationality,
  category,
  alcoholicOrNot,
  doneDate,
  tags,
  index,
}) {
  const [isShared, setShare] = useState(false);

  const shareRecipe = () => {
    setShare(true);
    copy(`http://localhost:3000/${type}s/${id}`);
  };

  return (
    <section className="done-recipes-card">
      <Link to={ `/${type}s/${id}` }>
        <Image
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      {type === 'food'
        ? (
          <RecipeTitle data-testid={ `${index}-horizontal-top-text` }>
            {`${nationality} - ${category}`}
          </RecipeTitle>
        )
        : (
          <RecipeTitle data-testid={ `${index}-horizontal-top-text` }>
            {alcoholicOrNot}
          </RecipeTitle>
        )}
      <Link to={ `/${type}s/${id}` }>
        <TitlesDetails data-testid={ `${index}-horizontal-name` }>
          {name}
        </TitlesDetails>
      </Link>
      <p data-testid={ `${index}-horizontal-done-date` }>
        {doneDate}
      </p>
      <button
        type="button"
        onClick={ shareRecipe }
      >
        {isShared
          ? 'Link copied!'
          : (
            <img
              src={ shareIcon }
              alt="Share Icon"
              data-testid={ `${index}-horizontal-share-btn` }
            />
          )}
      </button>
      {tags.map((tag, tagIndex) => (
        tagIndex < 2
          && (
            <span key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
              {tag}
            </span>
          )))}
    </section>
  );
}

DoneRecipesCard.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  nationality: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  alcoholicOrNot: propTypes.string.isRequired,
  doneDate: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  index: propTypes.number.isRequired,
};

export default DoneRecipesCard;
