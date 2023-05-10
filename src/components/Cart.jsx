
import React, { useContext } from 'react';
import { context } from './Context';
import { Card, Button, Row, Col } from 'react-bootstrap/';
import './Cart.css'

export const Cart = () => {
  const carts = useContext(context);
  const { cart,setCart } = carts;

  const RemoveCart = (e) => {
    const removeID = parseInt(e.target.id);  // used for convert string to number
    setCart(cart.filter((items) => items.id !== removeID));
  };

  return (
    <div>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {cart.map((item) => (
          <Col>
            <Card>
              <div className="product-image-box">
                <Card.Img variant="top" src={item.image} />
              </div>
              <Card.Body>
                <Card.Title>{item.model}</Card.Title>
                <Card.Text>
                  <h2>{item.price}</h2>
                 
                  <Button
                    onClick={RemoveCart}
                    id={item.id}
                    variant="primary"
                    type="submit"
                    className="mx-1"
                  >
                    Remove From Cart
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};



