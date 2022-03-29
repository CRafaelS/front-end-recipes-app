import React from 'react';

function Header() {
  return (
    <header>
      <h1 data-testid="page-title">page-title</h1>
      <p data-testid="profile-top-btn">Nome</p>
      <button data-testid="search-top-btn" type="button" id="searchBT">
        <img
          src="../src/images/searchIcon.svg"
          alt="Search"
        />
      </button>
    </header>
  );
}

export default Header;
