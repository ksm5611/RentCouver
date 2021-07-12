// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import "../App.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Navbar } from "rsuite";
import NavItem from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useToken from "../hooks/useToken";
import { useHistory } from "react-router-dom";
import { Fragment } from "react";

export default function Navigation() {
  function dropdownItemColor() {
    document.getElementsByClassName("dropdown-item").style.backgroundColor =
      "#FFF";
  }
  const { deleteToken } = useToken();
  const history = useHistory();
  const { userId } = useToken();
  const { token } = useToken();

  console.log(userId);

  const logout = () => {
    deleteToken();
    history.push("/login");
    history.go(0);
  };


  return (
    <div className="nav-container">
      <Navbar className="nav-wrapper">
        <Navbar.Header className="nav-logo">
          <Link as={Link} to="/" className="navbar-brand logo">
            RentCouver
          </Link>
        </Navbar.Header>
        <Navbar.Body className="nav-body">
          <NavItem className="nav-body-item-list nav-list-main">
            <NavItem.Item>
              <Link className="nav-link" to="/home">
                <FontAwesomeIcon icon={faHome} />
                &nbsp; Home
              </Link>
            </NavItem.Item>
            <NavItem.Item>
              <Link className="nav-link" to="/property_listings">
                Properties
              </Link>
            </NavItem.Item>
            <NavItem.Item>
              <Link className="nav-link" to="/">
                About us
              </Link>
            </NavItem.Item>
          </NavItem>

          {token === null ? ( 
            <div className="no-user-access">
              <NavItem.Item>
                <Link className="nav-link buttom secondary-btn access-btn" to="/login">
                  Login
              </Link>
              </NavItem.Item>
              <NavItem.Item>
                <Link className="nav-link button primary-btn access-btn" to="/signup">
                  Sign up
              </Link>
              </NavItem.Item>
            </div>
          ) : (
            <Fragment>
              <NavItem className="nav-body-item-list">
                <FontAwesomeIcon className="user-icon" icon={faUser} />
                <NavDropdown
                  className="profile-tab basic-nav-dropdown"
                  title="Profile"
                >
                  {/* <Fade> */}
                  <NavDropdown.Item
                    as={Link}
                    className="dropdown-item"
                    onClick={() => dropdownItemColor}
                    to={`/user/${userId}`}
                  >
                    Dashboard
              </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    className="dropdown-item"
                    onClick={() => dropdownItemColor}
                    to="/"
                  >
                    My properties
              </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    className="dropdown-item"
                    onClick={() => dropdownItemColor}
                    to={`/rent_history/${userId}`}
                  >
                    App status
              </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    className="dropdown-item"
                    onClick={() => dropdownItemColor}
                    to={`/rent_history/${userId}`}
                  >
                    Rent history
              </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    className="dropdown-item"
                    onClick={() => dropdownItemColor}
                    to={`/app_list/${userId}`}
                  >
                    Received Apps
              </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    className="dropdown-item"
                    onClick={() => dropdownItemColor}
                    to={`/ref_request_list/${userId}`}
                  >
                    Reference requests
              </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    className="dropdown-item"
                    onClick={logout}
                  >
                    Logout
              </NavDropdown.Item>
                </NavDropdown>
              </NavItem>
            </Fragment>
          )
          }

        </Navbar.Body>
      </Navbar>
    </div>
  );
}
