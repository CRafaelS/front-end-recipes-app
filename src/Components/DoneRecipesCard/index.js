import React from 'react';
import propTypes from 'prop-types';

function DoneRecipesCard({
  name,
  image,
  category,
  date,
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
      <p data-testid={ `${index}-horizontal-top-text` }>
        {category}
      </p>
      <p data-testid={ `${index}-horizontal-name` }>
        {name}
      </p>
      <p data-testid={ `${index}-horizontal-done-date` }>
        {date}
      </p>
      <button type="button" data-testid={ `${index}-horizontal-share-btn` }>
        Compartilhar
      </button>
      {tags.map((tag) => (
        <span key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
          {tag}
        </span>
      ))}
    </section>
  );
}

DoneRecipesCard.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  date: propTypes.shape().isRequired,
  tags: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  index: propTypes.number.isRequired,
};

export default DoneRecipesCard;
