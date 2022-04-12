import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchIcon from '../../images/searchIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
import HeaderSearchBar from '../HeaderSearchBar';
import { H1, HeaderContainer, Button } from './styledComponents';

function Header({ title, showButton }) {
  const [inputVisable, setInputVisable] = useState(false);

  return (
    <HeaderContainer>
      <Link to="/profile">
        <Button type="button" src={ profileIcon } alt="profile">
          <img
            className="img-header"
            src={ profileIcon }
            alt="profile"
            data-testid="profile-top-btn"
          />
        </Button>
      </Link>
      <H1 data-testid="page-title">{title}</H1>
      {showButton && (
        <Button
          data-testid="search-top-btn"
          type="button"
          src={ searchIcon }
          onClick={ () => setInputVisable(!inputVisable) }
        >
          <img className="img-header" src={ searchIcon } alt="search" />
        </Button>
      )}
      {inputVisable && <HeaderSearchBar />}
    </HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  showButton: PropTypes.bool,
}.isRequired;

export default Header;
