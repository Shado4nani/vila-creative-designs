import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Image} from 'react-bootstrap';
import styled from 'styled-components';

const Text = styled.text`
  border: none;
  border-radius: 3px;
  font-family: 'Supermercado One', cursive;
  color: #DD8726;
  

`;
function Navigation() {
  return (
    <div className="Navigation">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
        <Navbar.Brand href="/">
         <Text>Vila</Text>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Products</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
