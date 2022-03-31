import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './style.css';

function Footer() {
  return (
    <footer data-testid="footer" className="Footer">
      <Link to="/drinks">
        <button
          type="button"
        >
          <img
            src={ drinkIcon }
            alt="Icone de Drink"
            data-testid="drinks-bottom-btn"
          />
        </button>
      </Link>
      <Link to="/explore">
        <button
          type="button"
        >
          <img
            src={ exploreIcon }
            alt="Icone de Explore"
            data-testid="explore-bottom-btn"
          />
        </button>
      </Link>
      <Link to="/foods">
        <button type="button">
          <img
            src={ mealIcon }
            alt="Icone do Foods"
            data-testid="food-bottom-btn"
          />
        </button>
      </Link>
    </footer>
  );
}

export default Footer;
