import React from 'react';
import { screen, re } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter';

// test('Farewell, front-end', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/TRYBE/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Fazendo teste para o Componente Footer', () => {
  test('Teste se todos os elementos estão no rodapé da pagina Foods', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
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

  test('Teste se todos os elementos estão no rodapé da pagina Drink', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');
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
  test('Teste se todos os elementos estão nos rodapé da página Explore', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore');
    const drinkIcon = screen.getByRole('img', { name: /icone de drink/i });
    const exploreIcon = screen.getByRole('img', { name: /Icone de Explore/i });
    const foodsIcon = screen.getByRole('img', { name: /Icone do Foods/i });
    const drinkId = screen.getByTestId('drinks-bottom-btn');
    const exploreId = screen.getByTestId('explore-bottom-btn');
    const foodsId = screen.getByTestId('food-bottom-btn');


    expect(drinkIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(foodsIcon).toBeInTheDocument();

    expect(drinkId).toBeInTheDocument();
    expect(exploreId).toBeInTheDocument();
    expect(foodsId).toBeInTheDocument();

    expect(drinkIcon.src).toBe('http://localhost/drinkIcon.svg');
    expect(exploreIcon.src).toBe('http://localhost/exploreIcon.svg');
    expect(foodsIcon.src).toBe('http://localhost/mealIcon.svg');
  })
  test('Teste se todos os elementos estão nos rodapé da página Perfil', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    const drinkIcon = screen.getByRole('img', { name: /icone de drink/i });
    const exploreIcon = screen.getByRole('img', { name: /Icone de Explore/i });
    const foodsIcon = screen.getByRole('img', { name: /Icone do Foods/i });
    const drinkId = screen.getByTestId('drinks-bottom-btn');
    const exploreId = screen.getByTestId('explore-bottom-btn');
    const foodsId = screen.getByTestId('food-bottom-btn');


    expect(drinkIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(foodsIcon).toBeInTheDocument();

    expect(drinkId).toBeInTheDocument();
    expect(exploreId).toBeInTheDocument();
    expect(foodsId).toBeInTheDocument();

    expect(drinkIcon.src).toBe('http://localhost/drinkIcon.svg');
    expect(exploreIcon.src).toBe('http://localhost/exploreIcon.svg');
    expect(foodsIcon.src).toBe('http://localhost/mealIcon.svg');
  })
});
