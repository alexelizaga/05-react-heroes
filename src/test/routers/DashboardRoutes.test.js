import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('Test <DashboardRoutes />', () => {

  const contextValue = {
    user: {
      logged: true,
      name: 'Alex'
    }
  };

  test('should render correctly - Marvel', () => {
    const view = render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(view.baseElement).toMatchSnapshot();

    const userName = screen.queryByTestId('MyNavbarUserName');
    expect(userName.textContent.trim()).toBe(contextValue.user.name);

    const marvelScreenTitle = screen.queryByTestId('MarvelScreenTitle');
    expect(marvelScreenTitle.textContent.trim()).toBe('Marvel');
  });

  test('should render correctly - DC', () => {
    const view = render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/dc']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(view.baseElement).toMatchSnapshot();

    const dcScreenTitle = screen.queryByTestId('DcScreenTitle');
    expect(dcScreenTitle.textContent.trim()).toBe('DC');
  });

});