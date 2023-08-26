import React, { useContext, useRef, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { context } from './Context';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
      const Navigate =useNavigate()
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

        setInput([...input,{userName,email,password,id}]) 
        Navigate('/Login') // navigate to Login page using use Navigate
        //... values {userName,email,password} are spreaded to setInput state 
         }  

  return (
    

    <div className="d-flex justify-content-center align-items-center h-100" style={{ background: '#f7f7f7', padding: '8rem'}}>
  <div className="login-container p-5" style={{ maxWidth: '800px', background: '#fff', borderRadius: '10px', boxShadow: '10px 0px 10px rgba(0,0,0,0.2)' }}>
    <h3 className="mb-4">SignUp</h3>
    <div className="login-form">
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter name" ref={userNameRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        
        <Button  variant="primary" type="submit" >
          Sign in
        </Button>
        
      </Form>
    </div>
  </div>
</div>



    
  );
};

export default SignUp;


