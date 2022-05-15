import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { HeroScreen } from '../../../components/hero/HeroScreen';

describe('Test <HeroScreen />', () => {

  test('should not show hero screen without hero in params', () => {
    render(
      <MemoryRouter initialEntries={['/hero']}>
        <Routes>
          <Route path='/hero' element={<HeroScreen />} />
          <Route path='/' element={ <h1 data-testid='NoHeroPage'>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    const noHeroPage = screen.getByTestId('NoHeroPage');
    expect(noHeroPage.textContent.trim()).toBe('No Hero Page');
  });

  test('should show hero screen with Spiderman hero', () => {
    render(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path='hero/:heroId' element={<HeroScreen />} />
          <Route path='/' element={ <h1 data-testid='NoHeroPage'>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    const noHeroPage = screen.queryByTestId('NoHeroPage');
    expect(noHeroPage).not.toBeInTheDocument();

    const heroScreenSuperHero = screen.queryByTestId('HeroScreenSuperHero');
    expect(heroScreenSuperHero.textContent.trim()).toBe('Spider Man');
  });

});