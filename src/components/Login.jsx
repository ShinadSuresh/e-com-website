import React, { useContext, useRef } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { context } from './Context';


export const Login   = () => {
  
  const Navigate = useNavigate();
  const Signupdata = useContext(context);
  const {input} = Signupdata; // destrecutre input data

  const myreff =useRef(null) 
  const LoginValue = {  
    email: '',
    password: '',
  }


  const loginHandle =()=>{  // 
    
    const email =myreff.current.email.value;
    const password = myreff.current.password.value

    const filterData=input.filter((e)=>(e.email === email && e.password === password)) // email and password comapred and assigned to filterdata
    if(filterData.length > 0){ 
      Navigate('/')
    }else{
      alert('user not found')
    }
  }
  

  
  return (
    <div className="d-flex justify-content-center align-items-center h-100" style={{ background: '#f7f7f7', padding: '8rem' }}>
      <div className="login-container p-4" style={{ maxWidth: '600px', background: '#fff', borderRadius: '10px', boxShadow: '10px 0px 10px rgba(0,0,0,0.2)' }}>
        <h3 className="mb-4">Login</h3>
        <div className="login-form">
          <Form ref={myreff} onSubmit={ e => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name='email' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' />
            </Form.Group>

            <Button variant="primary" type="submit" className="mb-3" block onClick={loginHandle} >
              Login
            </Button>
            <p className="text-center">Do you have an Account?</p>
            <NavLink as={Link} to="/Signup" className="text-center">
              Create Account
            </NavLink>
          </Form>
        </div>
      </div>
    </div>
  )
}
