import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import logo from '../image/alc-logo.png';

const Header = () => {
  return (
    <Navbar bg="info"  fixed="top" expand="lg">
    <Navbar.Brand href="/"><img className="logo"  src={logo} alt="logo" style={{minWidth: '8rem', height:'3rem'}}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink className="headerLink" to="/checklist">Checklist</NavLink>
        <NavLink className="headerLink" to="/questionnare">Questionnaire</NavLink>
      </Nav>  
    </Navbar.Collapse>
  </Navbar>
  )
}
export default Header


