import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import AccountsUIWrapper from '../../../../imports/ui/AccountsUIWrapper.jsx'

const NavbarMain = () => {
  const logout = () => {
    Meteor.logout()
    FlowRouter.go('/login')
  }
  if (Meteor.userId()) {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">Crime Must Fall</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {/* <NavItem eventKey={1} href="/home">Home</NavItem> */}
            <NavItem eventKey={2} href="/chats_main_page">ALERT</NavItem>
            <NavDropdown eventKey={3} title="Contacts" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/contacts_search">Contacts search</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2} href="/my_contacts">My contacts</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} href="/requested_by_me">Requested by me</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4} href="/requests_to_me">Requests to me</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} title="Settings" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1} href="/my_settings">My settings</MenuItem>
              {/* <MenuItem divider />
              <MenuItem eventKey={4.2}>My emergency settings</MenuItem> */}
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            {/* <NavItem eventKey={1} href="#"><AccountsUIWrapper /></NavItem> */}
            <NavItem eventKey={5} href="#" onClick={logout}>Logout</NavItem>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
  } else {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/login">Crime Must Fall</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

      </Navbar>
    )
  }

};

export default NavbarMain;
