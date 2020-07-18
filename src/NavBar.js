import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "./UserContext";

function NavBar({handleLogOut}) {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <Link to="/" onClick={()=> handleLogOut()}>
              Logout
            </Link>
          </NavItem>
        </Nav>
  );
}

  function loggedOutNav() {
    return (
    <div>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
        </Nav>
    </div>
  );
}
return(
  <Navbar expand="md">
    <NavLink exact to="/" className="navbar-brand">
      Jobly
    </NavLink>
    {currentUser ? loggedInNav() : loggedOutNav()}
  </Navbar>
)
}

export default NavBar;
