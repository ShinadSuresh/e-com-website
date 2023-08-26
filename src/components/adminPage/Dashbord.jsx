import { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {FormControl} from 'react-bootstrap';
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { context } from "../Context";
import { useNavigate } from "react-router-dom";
import { Products } from "../Products";

function FormExample() {
  const nav = useNavigate();

  const { state, setState,setEdit } = useContext(context);

  const myref = useRef(); // reference to variable used

  const productHandle = (e) => {
    e.preventDefault(); //reducing Refresh of page

    const img = myref.current.image.value; //
    const name = myref.current.productname.value;
    const rate = myref.current.rate.value;
    const id = Math.floor(Math.random() * 100); // create unique id for product random

    setState([...state, { img, name, rate, id }]); // update state
  };

  const RemoveItem = (e) => {
    const removeItem = parseInt(e.target.id); // used for convert string to number
    setState(state.filter((item) => item.id !== removeItem));
  };

  const EditItem = (e) => {
    const removeEdit = parseInt(e.target.id); //string to number  button id converted reove id
    setEdit(state.filter((items) => items.id === removeEdit)); // select unque id from collection and comparing removeEdit id with that if both are equal select the items
    setState(state.filter((item) => item.id !== removeEdit)); // for deleting

    nav("/Edit/:id"); // navigation to edit page
  };

   const mysearch = useRef()
    const [searchs, setSearch] = useState([])
    

   const handleSearch = () => {
    const searchInput = mysearch.current.value
    const productInput = state.map(item => item.name)
    if(productInput.includes(searchInput)){
      setSearch(searchInput)
    }else{
      alert('item not found')
    }
  }



    
  console.log(Products);
  return (
    <div>
      <Form onSubmit={productHandle} ref={myref}>
        <Row className="mb-3">
          <Form.Group md="4">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="image"
              name="image" //attribute added to the label
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="product name"
              name="productname" //attribute added to the label
            />
          </Form.Group>
          <Form.Group md="4">
            <InputGroup hasValidation></InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group md="6">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="No of products"
              name="rate" //attribute added to the label
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="3">
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>

      
      <br/>
      
      <Form >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={mysearch} />
      <Button onClick={handleSearch} variant="outline-success">Search</Button><br/>
      {searchs.length > 0 ? `${searchs} found in list` : null}
      </Form>

      <Container>
        <Row>
          
          <Col>
            <div className="state-items">
              {state.map((x) => (
                <p key={x.id}>
                  {x.name}
                  <Button variant="primary" onClick={EditItem} id={x.id}>
                    Edit
                  </Button>{" "}
                  <Button variant="danger" onClick={RemoveItem} id={x.id}>
                    Delete
                  </Button>
                </p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormExample;
