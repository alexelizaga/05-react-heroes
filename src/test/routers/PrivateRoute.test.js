import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';

import { PrivateRoute } from '../../routers/PrivateRoute';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <span data-testid='ForbiddenAccess'>Forbidden access</span>
}));

describe('Test <PrivateRoute />', () => {
  
  Storage.prototype.setItem = jest.fn();

  test('should render private component if user is authenticated', () => {
    const valueContext = {
      user: {
        logged: true,
        name: 'Alex'
      }
    }
    render(
      <AuthContext.Provider value={ valueContext }>
        <MemoryRouter initialEntries={['/']}>
          <PrivateRoute>
            <h1 data-testid='PrivateComponent'>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const privateComponent = screen.queryByTestId('PrivateComponent');
    expect(privateComponent.textContent.trim()).toBe('Private Component');
    expect(localStorage.setItem).toBeCalledWith('lastPath', '/');
  });

  test('should not render private component if user is authenticated', () => {
    const valueContext = {
      user: { logged: false }
    }
    render(
      <AuthContext.Provider value={ valueContext }>
        <MemoryRouter initialEntries={['/']}>
          <PrivateRoute>
            <h1 data-testid='PrivateComponent'>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const privateComponent = screen.queryByTestId('PrivateComponent');
    expect(privateComponent).not.toBeInTheDocument();

    const forbiddenAccess = screen.queryByTestId('ForbiddenAccess');
    expect(forbiddenAccess).toBeInTheDocument();
  });

});