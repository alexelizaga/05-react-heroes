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

});