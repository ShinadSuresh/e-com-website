
import {Card, Button, Row, Col} from 'react-bootstrap/';
import { Products } from './Products';
import { useNavigate } from 'react-router-dom';

function ShopWomen() {
  const filterWomen = Products.filter(x => x.gen ==='f')
  const nav=useNavigate()

  return (
    <Row>
    <h1>Women</h1>
    {filterWomen .map((items=>
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


export default ShopWomen



