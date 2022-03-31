import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter';

describe('Fazendo teste para o Componente Footer', () => {
  const pageRoutes = ['/foods', '/drinks', '/explore', '/profile'];
  
  pageRoutes.forEach((route) => {
    test('Teste se todos os elementos estão no rodapé das paginas', () => {
      const { history } = renderWithRouter(<App />);
      history.push(route);
      const drinkIcon = screen.getByRole('img', { name: /icone de drink/i });
      const exploreIcon = screen.getByRole('img', { name: /Icone de Explore/i });
      const foodsIcon = screen.getByRole('img', { name: /Icone do Foods/i });
      const footerId = screen.getByTestId('footer');
      const drinkId = screen.getByTestId('drinks-bottom-btn');
      const exploreId = screen.getByTestId('explore-bottom-btn');
      const foodsId = screen.getByTestId('food-bottom-btn');
  
      expect(drinkIcon).toBeInTheDocument();
      expect(exploreIcon).toBeInTheDocument();
      expect(foodsIcon).toBeInTheDocument();
  
      expect(footerId).toBeInTheDocument();
      expect(drinkId).toBeInTheDocument();
      expect(exploreId).toBeInTheDocument();
      expect(foodsId).toBeInTheDocument();
  
      expect(drinkIcon.src).toBe('http://localhost/drinkIcon.svg');
      expect(exploreIcon.src).toBe('http://localhost/exploreIcon.svg');
      expect(foodsIcon.src).toBe('http://localhost/mealIcon.svg');
    })
  })
});
