import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../logo/logo.png";

const NavBar = () => {
   
  return (
    <div>
      <Navbar className={styles.NavBar} collapseOnSelect expand="lg">
        <Navbar.Brand>
          <img className={styles.image} src={logo} alt="logo" />
        </Navbar.Brand>
        <div className={styles.Toggle}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>More deets</Nav.Link>
            <Nav.Link eventKey={2}>Dank memes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
