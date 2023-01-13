
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Header2() {
  



  return (
    <Navbar bg="light" expand="lg" id="header" className='fixed-top gr'>
      <Container className=''>
        <Navbar.Brand href="/home" className=''>
          <img src="assets/img/logo-secure.png" className='logo' id="" width="180px" alt="/"></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
          <Navbar.Collapse id="basic-navbar-nav navbar">
            <Nav className="me-auto navbar">
              <NavLink to="/" className="active nav-color">Home</NavLink>
              <NavLink to="/about" className="active nav-color">About</NavLink>
              <NavLink to="/feature" className="active nav-color">Feature</NavLink>
              <NavLink to="/pricing" className="active nav-color">Pricing</NavLink>
              <NavLink to="/contact" className="active nav-color">Contact</NavLink>
              <NavLink to="/home" className="active nav-color d-none"><img src="assets/img/moon.png" alt="/" height="30px;" id="icon"/></NavLink>
              <NavLink to="/login"><button class="btn btn-outline-primary" type="submit">Login</button></NavLink>
              <NavLink to="/signup"><button class="btn btn-outline-primary" type="submit">SignUp</button></NavLink>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header2;