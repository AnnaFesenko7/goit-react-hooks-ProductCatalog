import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
const Styles = styled.div`


a {
    display: block;
    padding: 0.5rem 1rem;
    color: #000;
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
}
    &:hover {
     
    }
  }
  a.active {
    color: blue;
  }
`;

function NavBar() {
  return (
    <Container>
      <Styles>
        <div className="nav">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>
        </div>
      </Styles>
    </Container>
  );
}

export default NavBar;
