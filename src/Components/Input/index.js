import React from 'react';
import propTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function Input({
  name,
  type = 'text',
  controller,
  testId,
}) {
  return (
    <Form.Group controlId={ name }>
      <Form.Label className="d-none">{name}</Form.Label>
      <Form.Control
        size="lg"
        data-testid={ testId }
        type={ type }
        placeholder={ name }
        onChange={ ({ target: { value } }) => controller(value) }
      />
    </Form.Group>
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
