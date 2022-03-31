import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchIcon from '../../images/searchIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
import HeaderSearchBar from '../HeaderSearchBar';

function Header({ title, showButton }) {
  const [inputVisable, setInputVisable] = useState(false);

  return (
    <header>
      <h1 data-testid="page-title">{ title }</h1>
      <Link to="/profile">
        <button
          type="button"
          src={ profileIcon }
          alt="profile"
        >
          <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
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
        <HeaderSearchBar />
      )}

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  showButton: PropTypes.bool,
}.isRequired;

export default Header;
