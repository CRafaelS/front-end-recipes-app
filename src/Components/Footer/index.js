import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import { FooterContainer, Button } from './styledComponents';

function Footer() {
  return (
    <FooterContainer data-testid="footer">
      <Link to="/drinks">
        <Button
          type="button"
        >
          <img
            src={ drinkIcon }
            alt="Icone de Drink"
            data-testid="drinks-bottom-btn"
          />
        </Button>
      </Link>
      <Link to="/explore">
        <Button
          type="button"
        >
          <img
            src={ exploreIcon }
            alt="Icone de Explore"
            data-testid="explore-bottom-btn"
          />
        </Button>
      </Link>
      <Link to="/foods">
        <Button type="button">
          <img
            src={ mealIcon }
            alt="Icone do Foods"
            data-testid="food-bottom-btn"
          />
        </Button>
      </Link>
    </FooterContainer>
  );
}

export default Footer;
