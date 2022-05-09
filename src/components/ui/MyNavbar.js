import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MyNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Container>
        <Navbar.Brand as={Link} to="/">Asociaciones</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/marvel">Marvel</Nav.Link>
            <Nav.Link as={Link} to="/dc">DC</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/login">Logout</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
