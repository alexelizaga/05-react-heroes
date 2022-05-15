import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { MyNavbar } from '../../../components/ui/MyNavbar';
import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Test <MyNavbar />', () => {

  const contextValue = {
    user: {
      logged: true,
      name: 'Pedro'
    },
    dispatch: mockDispatch
  };

  test('should render correctly', () => {
    const view = render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path='/' element={<MyNavbar />} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(view.baseElement).toMatchSnapshot();

    const myNavbarUserName = screen.queryByTestId('MyNavbarUserName');
    expect(myNavbarUserName.textContent.trim()).toBe(contextValue.user.name);
  });

  test('should handle logout', () => {
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/']}>
          <MyNavbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const myNavbarLogoutBtn = screen.queryByTestId('MyNavbarLogoutBtn');
    fireEvent.click(myNavbarLogoutBtn);

    expect(mockDispatch).toBeCalledWith({ 'type': types.logout });
    expect(mockNavigate).toBeCalledWith('/login', { replace: true });
  });

});