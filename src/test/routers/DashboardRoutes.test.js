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

  test('should render correctly', () => {
    const view = render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(view.baseElement).toMatchSnapshot();

    const userName = screen.queryByTestId('MyNavbarUserName');
    expect(userName.textContent.trim()).toBe(contextValue.user.name);
  });

});