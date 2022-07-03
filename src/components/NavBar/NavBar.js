import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SearchForm } from '../SearchForm/SearchForm';

import styled from 'styled-components';
const Styles = styled.div`
  a.active {
    color: blue !important;
  }
`;

function NavBar() {
  return (
    <Styles>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <SearchForm />
            </Nav>
            <Nav>
              <Button variant="primary" className="me-3">
                Log In
              </Button>
              <Button variant="primary"> Sing out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
}

export default NavBar;
