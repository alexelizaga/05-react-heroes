import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export const MyNavbar = () => {
  const { pathname } = useLocation();

  const handleLogout = () => {
    // TODO: 
    console.log('logout')
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
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Alex</Navbar.Text>
          <Nav>
            <Button variant='light' onClick={handleLogout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
