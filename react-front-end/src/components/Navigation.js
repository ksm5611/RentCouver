// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../App.css'
import { Navbar, Dropdown, Icon } from 'rsuite';
import NavItem from 'react-bootstrap/Nav';
import 'rsuite/dist/styles/rsuite-default.css';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {

  function dropdownItemColor() {
    document.getElementsByClassName('dropdown-item').style.backgroundColor='#FFF';
  }

  return (
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
          // activeKey="/home"
          // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          className="nav-body-item-list"
        >


          <NavItem.Item>
            <NavItem.Link className="nav-link" href="/home"><FontAwesomeIcon icon={faHome} />&nbsp; Home</NavItem.Link>
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
            <NavDropdown.Item className="dropdown-item" onClick={() => dropdownItemColor} href="/">Dashboard</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" onClick={() => dropdownItemColor} href="/">My properties</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" onClick={() => dropdownItemColor} href="/">My Rent History</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" onClick={() => dropdownItemColor} href="/">My References</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="dropdown-item" onClick={() => dropdownItemColor} href="/">Received Apps</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" onClick={() => dropdownItemColor} href="/">Reference requests</NavDropdown.Item>
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
};