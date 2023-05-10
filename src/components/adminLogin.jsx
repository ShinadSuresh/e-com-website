import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUpForm() {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control size="sm" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control size="sm" type="password" placeholder="Password" />
      </Form.Group>

      <Button size="sm" variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
  );
}

export default SignUpForm;
