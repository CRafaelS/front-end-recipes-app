import React from 'react';

export default function Cards() {
  const divStyle = {
    width: '162px',
    height: '172px',
  };
  return (
    <div data-testid="${index}-recipe-card" style={ divStyle }>
      index
    </div>
  );
}
