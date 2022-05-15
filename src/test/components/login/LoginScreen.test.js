import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../../auth/authContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Test <LoginScreen />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  };

  test('should render correctly', () => {
    const view = render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>
          <LoginScreen />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(view.baseElement).toMatchSnapshot();
  });

  test('should login', () => {
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const loginScreenBtn = screen.queryByTestId('LoginScreenBtn');
    fireEvent.click(loginScreenBtn);

    expect(contextValue.dispatch).toBeCalledWith({
      type: types.login,
      payload: { name: 'Alex'} 
    });

    expect(mockNavigate).toBeCalledWith('/marvel', { replace: true });

    localStorage.setItem('lastPath', '/dc');

    fireEvent.click(loginScreenBtn);

    expect(mockNavigate).toBeCalledWith('/dc', { replace: true });
  });

});