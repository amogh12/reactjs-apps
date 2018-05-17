import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Github searcher
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="#"> Login</NavItem>
        </Nav>
      </Navbar>
    )
  }
};
