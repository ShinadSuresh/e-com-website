import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';




function BasicExample() {
  return (
    <>  
    
    <Navbar bg="light" expand="lg">
        <Container>

        <NavLink to='/' style={{textDecoration: 'none'}}>
          <Navbar.Brand className='mr-auto' href="Plashoe" style={{fontFamily:'Arial', fontSize:'24px', fontWeight:'bold', textDecoration:'none'}}>P L A S H O E S</Navbar.Brand>
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavLink to='ShopMen' style={{textDecoration: 'none'}}>
                <Nav.Link href="men">MEN</Nav.Link>
              </NavLink>

              <NavLink to='ShopWomen' style={{textDecoration: 'none'}} >
                <Nav.Link href="#link">WOMEN</Nav.Link>
              </NavLink>

              <NavLink to='Collection' style={{textDecoration: 'none'}}>
              <Nav.Link href="#link">COLLECTION</Nav.Link>
              </NavLink>

              
              
              <Nav className="justify-content-end" style={{}}>
                
                <Nav.Link as={Link} to="/admin" className="mr-auto">Admins Only</Nav.Link>
                <Nav.Link as={Link} to="/cart" className="ml-auto">
                   <FaShoppingCart />
                </Nav.Link>

                <Nav.Link as={Link} to="/Login" className="ml-auto">
                <FiPhone/>
                </Nav.Link>


              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet/>

      

    
      </>
  );
}

export default BasicExample;

