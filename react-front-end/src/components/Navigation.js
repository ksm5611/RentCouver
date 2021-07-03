import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../Navigation.css';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect className="nav-color" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">RentCouver</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#listings">Property</Nav.Link>
          <Nav.Link href="#AboutUs">About Us</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link href="#user">Profile</Nav.Link>
          {/* <Nav.Link eventKey={2} href="#memes">
            Dank memes
      </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};