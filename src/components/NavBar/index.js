import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./styles.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className={this.props.className}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" id="testBrand">
              Casual Gamer Cafe
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/about_us">
              About Us
            </NavItem>
            <NavItem eventKey={2} href="/shop_events">
              Shop Events
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/hours">
              Store Hours
            </NavItem>
            <NavItem eventKey={2} href="/map">
              Location
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavBar.defaultProps = {
  className: "Nav-bar"
};

export default NavBar;
