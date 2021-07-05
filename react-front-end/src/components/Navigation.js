// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import "../App.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Navbar } from "rsuite";
import NavItem from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  function dropdownItemColor() {
    document.getElementsByClassName("dropdown-item").style.backgroundColor =
      "#FFF";
  }

  return (
    <Navbar id="nav-wrapper">
      <Navbar.Header id="nav-logo">
        <a href="/" className="navbar-brand logo">
          <div>
            <h4>RentCouver</h4>
          </div>
        </a>
      </Navbar.Header>
      <Navbar.Body className="nav-body">
        <NavItem className="nav-body-item-list">
          <NavItem.Item>
            <NavItem.Link className="nav-link" href="/home">
              <FontAwesomeIcon icon={faHome} />
              &nbsp; Home
            </NavItem.Link>
          </NavItem.Item>
          <NavItem.Item>
            <NavItem.Link
              className="nav-link"
              eventKey="link-1"
              href="/property_listings"
            >
              Properties
            </NavItem.Link>
          </NavItem.Item>
          <NavItem.Item>
            <NavItem.Link className="nav-link" eventKey="link-2">
              About Us
            </NavItem.Link>
          </NavItem.Item>
        </NavItem>
        <NavItem className="nav-body-item-list">
          <FontAwesomeIcon className="user-icon" icon={faUser} />
          <NavDropdown
            className="profile-tab"
            title="Profile"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              className="dropdown-item"
              onClick={() => dropdownItemColor}
              href="/user"
            >
              Dashboard
            </NavDropdown.Item>
            <NavDropdown.Item
              className="dropdown-item"
              onClick={() => dropdownItemColor}
              href="/"
            >
              My properties
            </NavDropdown.Item>
            <NavDropdown.Item
              className="dropdown-item"
              onClick={() => dropdownItemColor}
              href="/rent_history"
            >
              My Rent History
            </NavDropdown.Item>
            <NavDropdown.Item
              className="dropdown-item"
              onClick={() => dropdownItemColor}
              href="/user"
            >
              My References
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="dropdown-item"
              onClick={() => dropdownItemColor}
              href="/app_list"
            >
              Received Apps
            </NavDropdown.Item>
            <NavDropdown.Item
              className="dropdown-item"
              onClick={() => dropdownItemColor}
              href="/ref_request_list"
            >
              Reference requests
            </NavDropdown.Item>
          </NavDropdown>
        </NavItem>
      </Navbar.Body>
    </Navbar>
  );
}
