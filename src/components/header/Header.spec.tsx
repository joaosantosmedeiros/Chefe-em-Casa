import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  
    const logo = getByText('Chefe em Casa')
    const searchByName = getByText('Pesquisar Receitas')
    const searchByLetter = getByText('Receitas por Letra')
    const searchByIngredient = getByText('Receitas por Ingredientes')
  
    expect(logo).toBeInTheDocument();
    expect(searchByIngredient).toBeInTheDocument();
    expect(searchByName).toBeInTheDocument();
    expect(searchByLetter).toBeInTheDocument();
  })
});