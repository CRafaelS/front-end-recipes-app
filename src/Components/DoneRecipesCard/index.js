import React from 'react';
import propTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

function DoneRecipesCard({
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
  return (
    <section className="done-recips-card">
      <img
        src={ image }
        alt={ name }
        data-testid={ `${index}-horizontal-image` }
      />
      {type === 'food'
        ? (
          <p data-testid={ `${index}-horizontal-top-text` }>
            {`${nationality} - ${category}`}
          </p>
        )
        : (
          <p data-testid={ `${index}-horizontal-top-text` }>
            {alcoholicOrNot}
          </p>
        )}
      <p data-testid={ `${index}-horizontal-name` }>
        {name}
      </p>
      <p data-testid={ `${index}-horizontal-done-date` }>
        {doneDate}
      </p>
      <button type="button">
        <img
          src={ shareIcon }
          alt="Share Icon"
          data-testid={ `${index}-horizontal-share-btn` }
        />
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
