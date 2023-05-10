import React  from 'react'
import { Products } from './Products'
import { useParams } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap/';
import { useContext } from 'react';
import { context } from './Context';
import { useNavigate } from 'react-router-dom';



function ViewDetails() {

    const addCart=useContext(context);
    const {cart,setCart,state,setState}=addCart;
    const nav=useNavigate()
    
    const Carts = ()=> {
            const [addData] = data;
            setCart([...cart,addData])
            alert("added sucessfully")
            nav('/cart')

            console.log(cart);

    }

    const { id } = useParams(); // to feching the parameter/value  of the id from url
    const data = Products.filter((item) => item.id === parseInt(id)); //parseInt id with matching id of item

    
    
    return (
        <div>
            {data.map((item) => (
                <>

                <Card style={{ width: '50rem'}}>
                <Card.Img variant="top" src={item.image} style={{ objectFit: 'cover', height: '500px' }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>{item.model}</Card.Title>
                  <Card.Text style={{ fontSize: '20px', margin: '10px 0' }}>
                    <span style={{ color: '#C43235', fontWeight: 'bold', marginRight: '5px' }}>$</span>
                    {item.price}
                  </Card.Text>
                  <Button onClick={Carts} variant="danger" style={{ width: '100%' }}>Add To Cart</Button>
                </Card.Body>
              </Card>
                </>
            ))}
 
        </div>
    );
}

export default ViewDetails