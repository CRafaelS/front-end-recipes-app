import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
} from './styledComponents';

function ExploreButtons() {
  const history = useHistory();

  return (
    <Container>
      <Button
        type="button"
        data-testid="explore-foods"
        onClick={ () => history.push('/explore/foods') }
      >
        Explore Foods
      </Button>
      <Button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => history.push('/explore/drinks') }
      >
        Explore Drinks
      </Button>
    </Container>
  );
}
export default ExploreButtons;
