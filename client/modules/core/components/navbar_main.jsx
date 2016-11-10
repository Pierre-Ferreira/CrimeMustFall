import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import AccountsUIWrapper from '../../../../imports/ui/AccountsUIWrapper.jsx'
const NavbarMain = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Crime Must Fall</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="home">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="mysettings">My Settings</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.2} href="contactssearch">Contacts Search</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>My Emergency Settings</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#"><AccountsUIWrapper /></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarMain;
