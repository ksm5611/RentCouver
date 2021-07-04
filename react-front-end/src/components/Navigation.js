// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../App.css'
import { Navbar, Nav, Icon, Dropdown } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

export default function Navigation() {

  const instance = (
      <Navbar id="nav-wrapper">
        <Navbar.Header id="nav-logo">
          <a href="/" className="navbar-brand logo"><h4>RentCouver</h4></a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
            <Nav.Item>Properties</Nav.Item>
            <Nav.Item>About Us</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Dropdown className="test" title="Profile" icon={<Icon icon="avatar" />}>
              <Dropdown.Item>Account</Dropdown.Item>
              <Dropdown.Item>My properties</Dropdown.Item>
              <Dropdown.Item>Received Apps</Dropdown.Item>
              <Dropdown.Item>My References</Dropdown.Item>
              <Dropdown.Item>Rent History</Dropdown.Item>
              <Dropdown.Item>Reference requests</Dropdown.Item>
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