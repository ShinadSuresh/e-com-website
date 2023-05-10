
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col md={3}>
            <ul className="list-unstyled">
              <li className="mb-3">PLASHOE</li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Shop</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">About</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Need Help?</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Men's Shoes</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Women's Shoes</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Kid's Shoes</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Accessories</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="mb-3">Account</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Login</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Register</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">My Account</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Order History</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="mb-3">Stay Connected</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Facebook</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Twitter</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Instagram</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Pinterest</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center small">&copy; 2023 Plashoe. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;


