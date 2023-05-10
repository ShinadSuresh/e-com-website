import React, { useContext, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { context } from './Context';


const LoginPage = () => {
      const loginContext = useContext(context) // context stored in loginContex 
      const {input,setInput}=loginContext     // loginContext destrecute in {input,setInput}

      const userNameRef=useRef() // reference to variable used
      const emailRef=useRef()
      const passwordRef=useRef()

      const handlesubmit= (e)=> {    //  input date converted using context to use state.
          e.preventDefault() // prevent default reloading of page
        const userName=userNameRef.current.value
        const email=emailRef.current.value
        const password=passwordRef.current.value
        const id=Math.floor(Math.random()*100) // create unique id for product random

        setInput([...input,{userName,email,password,id}]) //... values {userName,email,password} are spreaded to setInput state 


      }

  return (
    <div className="d-flex justify-content-center align-items-center h-100" style={{ background: '#f7f7f7' }}>
      <div className="login-container p-4" style={{ maxWidth: '600px', background: '#fff', borderRadius: '4px', boxShadow: '0px 0px 10px rgba(0,0,0,0.2)' }}>
        <h3 className="mb-4">Login</h3>
        <Form onSubmit={handlesubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>user Name</Form.Label>
            <Form.Control type="userName" placeholder="Enter name"  ref={userNameRef}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label >Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
          </Form.Group>


          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Login
          </Button>
        </Form>
      </div>
    </div>


    
  );
};

export default LoginPage;


