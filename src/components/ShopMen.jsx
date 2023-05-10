
import {Card, Button, Row, Col} from 'react-bootstrap/';
import { Products } from './Products';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ShopMen() {
  const filterMen = Products.filter(x => x.gen ==='m')
  const nav=useNavigate()

  return (
    <Row className="g-2">
    <h1>Men</h1>
    {filterMen.map((items=>
        <Col md={4} className='d-flex align-items-center justify-content-center , g-4 '>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={items.image} />
          <Card.Body>
            <Card.Title>{items.model}</Card.Title>
            <Card.Text>
            <h2>{items.price}</h2>
            </Card.Text>
            <Button onClick={()=>nav(`/view/${items.id}`)} variant="primary">View Product</Button>
          </Card.Body>
        </Card>
      </Col>

 


      ))}
      
      
      
    </Row>
  );
}


export default ShopMen

