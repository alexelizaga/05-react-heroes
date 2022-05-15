import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SearchScreen } from '../../../components/search/SearchScreen';
import { heroes } from '../../../data/heroes';

describe('Test <SearchScreen />', () => {

  test('should render correctly', () => {
    const view = render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(view.baseElement).toMatchSnapshot();

    const heroCards = screen.queryAllByTestId('HeroCard');
    expect( heroCards.length ).toBe( heroes.length );
  });

  test('should search Batman', () => {
    const view = render(
      <MemoryRouter initialEntries={['/search?q=Batman']}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(view.baseElement).toMatchSnapshot();

    const searchScreenInput = screen.queryByTestId('SearchScreenInput');
    expect(searchScreenInput.getAttribute('value')).toBe('Batman');

    const heroCards = screen.queryAllByTestId('HeroCard');
    expect( heroCards.length ).toBe( 1 );

    const heroCardSuperHero = screen.queryByTestId('HeroCardSuperHero');
    expect( heroCardSuperHero.textContent ).toBe( 'Batman' );
  });

  test('should show not found superhero error', () => {
    const view = render(
      <MemoryRouter initialEntries={['/search?q=Batman123']}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(view.baseElement).toMatchSnapshot();

    const searchScreenInput = screen.queryByTestId('SearchScreenInput');
    expect(searchScreenInput.getAttribute('value')).toBe('Batman123');

    const searchScreenAlert = screen.queryByTestId('SearchScreenAlert');
    expect( searchScreenAlert.textContent.trim() ).toBe( 'No hay resultados para Batman123' );
  });

});