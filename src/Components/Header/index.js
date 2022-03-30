import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchIcon from '../../images/searchIcon.svg';
import profileIcon from '../../images/profileIcon.svg';

function Header({ title, showButton }) {
  const [inputVisable, setInputVisable] = useState(false);

  return (
    <header>
      <h1 data-testid="page-title">{ title }</h1>
      <Link to="/profile">
        <button
          data-testid="profile-top-btn"
          type="button"
          src={ profileIcon }
          alt="profile"
        >
          <img src={ profileIcon } alt="profile" />
        </button>
      </Link>
      {showButton && (
        <button
          data-testid="search-top-btn"
          type="button"
          src={ searchIcon }
          onClick={ () => setInputVisable(!inputVisable) }
        >
          <img src={ searchIcon } alt="search" />
        </button>)}
      {inputVisable && (
        <input type="text" data-testid="search-input" />
      )}

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  showButton: PropTypes.bool,
}.isRequired;

export default Header;
