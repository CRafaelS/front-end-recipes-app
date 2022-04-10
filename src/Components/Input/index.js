import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

function Input({
  name,
  type = 'text',
  controller,
  testId,
}) {
  const [firstNameLetter, ...nameRestLetters] = name;

  const LoginInput = styled.input`
  background-color: green;
  `;

  return (
    <label htmlFor={ name }>
      {`${firstNameLetter}${nameRestLetters.join('')}`}
      <LoginInput
        data-testid={ testId }
        id={ name }
        name={ name }
        type={ type }
        onChange={ ({ target: { value } }) => controller(value) }
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
