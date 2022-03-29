import React from 'react';
import propTypes from 'prop-types';

function Input({
  name,
  type = 'text',
  controller,
  testId,
}) {
  const [firstNameLetter, ...nameRestLetters] = name;
  return (
    <label htmlFor={ name }>
      {`${firstNameLetter}${nameRestLetters.join('')}`}
      <input
        data-testid={ testId }
        id={ name }
        name={ name }
        type={ type }
        onChange={ controller }
      />
    </label>
  );
}

Input.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  controller: propTypes.func,
  testId: propTypes.string.isRequired,
};

Input.defaultProps = {
  controller: null,
};

export default Input;
