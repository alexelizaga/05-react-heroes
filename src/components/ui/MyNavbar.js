import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';

export const MyNavbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    navigate('/login', {
      replace: true,
    });
  };

  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Container>
        <Navbar.Brand as={Link} to="/">Asociaciones</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={pathname} className="me-auto">
            <Nav.Link
              as={Link}
              to='/marvel'
              eventKey='/marvel'
            >
              Marvel
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/dc'
              eventKey='/dc'
            >
              DC
            </Nav.Link>

            <Nav.Link
              as={Link}
              to='/search'
              eventKey='/search'
            >
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-info'>
            { user.name }
          </Navbar.Text>
          <Nav>
            <Button variant='dark' onClick={handleLogout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
