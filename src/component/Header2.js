import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Modal from "../component/modal/Modal";
import React,{useState} from 'react';

function Header2() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Navbar bg="light" expand="lg" id="header" className='fixed-top'>
      <Container className=''>
        <Navbar.Brand href="/home" className=''>
          <img src="assets/img/logo-secure.png" className='logo' id="" width="180px" ></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
          <Navbar.Collapse id="basic-navbar-nav navbar">
            <Nav className="me-auto navbar">
              <NavLink to="/home" className="active nav-color">Home</NavLink>
              <NavLink to="/about" className="active nav-color">About</NavLink>
              <NavLink to="/feature" className="active nav-color">Feature</NavLink>
              <NavLink to="/pricing" className="active nav-color">Pricing</NavLink>
              <NavLink to="/contact" className="active nav-color">Contact</NavLink>
              <NavLink to="#link"><button class="btn btn-outline-primary ms-md-4" type="submit">Login</button></NavLink>
              <button className="openModalBtn" onClick={() => { setModalOpen(true)}}>Open</button>
            </Nav>
          </Navbar.Collapse>
      </Container>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </Navbar>

  );
}

export default Header2;