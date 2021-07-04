// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../App.css'
import { Navbar, Icon, Dropdown, Nav } from 'rsuite';
import NavItem from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import 'rsuite/dist/styles/rsuite-default.css';

export default function Navigation() {

  const instance = (
    <Navbar id="nav-wrapper">
      <Navbar.Header id="nav-logo">
        <a href="/" className="navbar-brand logo"><div><h4>RentCouver</h4></div></a>
      </Navbar.Header>
      <Navbar.Body className="nav-body">
        {/* <Nav>
            {/* <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
            <Nav.Item>Properties</Nav.Item>
            <Nav.Item>About Us</Nav.Item> </Nav> */}
        <NavItem
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          className="nav-body-item-list"
        >
          <NavItem.Item  icon={<Icon icon="home" />}>
            <NavItem.Link className="nav-link" href="/home">Home</NavItem.Link>
          </NavItem.Item>
          <NavItem.Item>
            <NavItem.Link className="nav-link" eventKey="link-1">Properties</NavItem.Link>
          </NavItem.Item>
          <NavItem.Item>
            <NavItem.Link className="nav-link" eventKey="link-2">About Us</NavItem.Link>
          </NavItem.Item>
        
        </NavItem>
        <NavItem className="nav-body-item-list">
          <NavDropdown className="profile-tab" title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item className="dropdown-item" href="#action/3.1">Dashboard</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" href="#action/3.2">Account</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" href="#action/3.3">My properties</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="dropdown-item" href="#action/3.4">Received Apps</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" href="#action/3.4">My References</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" href="#action/3.4">Rent History</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" href="#action/3.4">Reference requests</NavDropdown.Item>
          </NavDropdown>
        </NavItem>

        {/* <Nav className="profile-tab" pullRight>
          <Dropdown className="dropdown-space" title="Profile" icon={<Icon icon="avatar" />}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>My properties</Dropdown.Item>
            <Dropdown.Item>Received Apps</Dropdown.Item>
            <Dropdown.Item>My References</Dropdown.Item>
            <Dropdown.Item>Rent History</Dropdown.Item>
            <Dropdown.Item>Reference requests</Dropdown.Item>
          </Dropdown>
        </Nav> */}


      </Navbar.Body>
    </Navbar>
  );

  return (
    <div>
      {instance}
    </div>

  )
};