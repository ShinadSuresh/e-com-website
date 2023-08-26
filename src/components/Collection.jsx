import React, { useContext } from 'react'
import { Products } from './Products'
import {Card, Button} from 'react-bootstrap/';
import { useNavigate } from 'react-router-dom';
import { context } from './Context';




const Collection = () => {
  const nav=useNavigate()

const {state,setState}=useContext(context)

const RemoveItem = (e) => {
    const removeItem = parseInt(e.target.id);    // used for convert string to number
    setState(state.filter((item) => item.id !== removeItem)); } 


  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', gap: '2rem' }}>


  {Products.map((item)=>(
    
    <Card>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.model}</Card.Title>
        <Card.Text>
          <h2>{item.price}</h2>
        </Card.Text>
        <Button onClick={()=>nav(`/view/${item.id}`)} variant="primary">View Product</Button> 
      </Card.Body>
    </Card>
  ))}

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', gap: '2rem' }}>


  {state.map((item)=>(
    
    <Card key={item.id}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          <h2>{item.rate}</h2>
        </Card.Text>
        
        <Button onClick={()=>nav(`//${item.id}`)} variant="primary">Edit</Button>
        
        {' '}
        <Button onClick={RemoveItem} id={item.id} variant="primary">Remove</Button>
      </Card.Body>
    </Card>
  ))}

  </div>

</div>



  )
}

export default Collection