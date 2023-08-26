import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminLogin() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ background: '#f7f7f7' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Form style={{ background: '#fff', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.2)', padding: '2rem' }}>
              <h3 className="mb-4">Admins Only</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <br/>

              <div className="d-grid">
                <Button variant="primary" type="submit" className="#fff">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
