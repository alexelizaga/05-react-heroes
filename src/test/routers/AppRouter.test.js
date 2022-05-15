import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from '../../auth/authContext';

describe('Test <AppRouter />', () => {

  test('should show login if user is not authenticated', () => {
    const contextValue = {
      user: {
        logged: false
      }
    };

    const view = render(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(view.baseElement).toMatchSnapshot();

    const title = screen.queryByTestId('LoginScreenTitle');
    expect(title.textContent.trim()).toBe('Login');

  });

  test('should show <Marvel /> if user is authenticated', () => {
    const contextValue = {
      user: {
        logged: true,
        name: 'Pepe'
      }
    };

    const view = render(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(view.baseElement).toMatchSnapshot();

    const navbar = screen.queryByTestId('MyNavbar');
    expect(navbar).toBeInTheDocument();
  });

})