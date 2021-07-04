// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../App.css'
import { Navbar, Nav, Icon, Dropdown } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

export default function Navigation() {

  const instance = (
      <Navbar className="nav-wrapper">
        <Navbar.Header id="nav-logo">
          <a href="/" className="navbar-brand logo">RentCouver</a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
            <Nav.Item>Properties</Nav.Item>
            <Nav.Item>About Us</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Dropdown title="Profile" icon={<Icon icon="avatar" />}>
              <Dropdown.Item>Company</Dropdown.Item>
              <Dropdown.Item>Team</Dropdown.Item>
              <Dropdown.Item>Contact</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Navbar.Body>
      </Navbar>
  );

  return (
    <>
      {instance}
    </>

  )
};