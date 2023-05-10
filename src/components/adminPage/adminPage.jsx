import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function AdminNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Admin Page</Navbar.Brand>
        <Nav className="me-auto">

          <Nav.Link as={Link} to="/dashbord">Dashboard</Nav.Link>
          
          <Nav.Link as={Link} to="/User">Users</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  );
}

export default AdminNav;

