// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// const Header = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">E-Commerce Dashboard</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Products</Nav.Link>
//             <Nav.Link href="#link">Orders</Nav.Link>
//             <Nav.Link href="#link">Customers</Nav.Link>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#link">Logout</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import React from "react";
import styled from "styled-components";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//import {useNavigate,Link} from 'react-router-dom'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  /* Add your logo styles here */
`;

const Navigation = styled.nav`
  /* Add your navigation styles here */
`;

const MenuItem = styled.a`
  margin: 0 15px;
  color: #333333;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6600;
  }
`;

const AuthOptions = styled.div`
  display: flex;
  align-items: center;
`;

const AuthLink = styled.a`
  margin-left: 20px;
  color: #333333;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6600;
  }
`;

const Header = () => {
  const auth = localStorage.getItem("user");
  console.log("auth", auth);
  //const history = useHistory();
  //const nav = useNavigate();

  const Logout = () => {
    localStorage.clear();
    // history.push("/login");
    //nav('/')
    window.location.reload();
  };
  return (
    <HeaderContainer>
      <Logo>YourCompany</Logo>
      <Navigation>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">Shop</MenuItem>
        <MenuItem href="#">About</MenuItem>
        <MenuItem href="#">Contact</MenuItem>
      </Navigation>
      <AuthOptions>
        {auth ? (
          <AuthLink href="/login" onClick={Logout}>
            Logout
          </AuthLink>
        ) : (
          <>
            <AuthLink href="#">Login</AuthLink>
            <AuthLink href="#">Register</AuthLink>
          </>
        )}
      </AuthOptions>
    </HeaderContainer>
  );
};

export default Header;
