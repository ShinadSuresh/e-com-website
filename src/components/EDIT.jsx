
import { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { context } from './Context';

function EditProduct() {

    const productEdit = useContext(context)
    const {edit,state,setState} = productEdit // destrected 3 items

    const inputName = useRef()
    const inputImage = useRef()
    const inputRate = useRef()

    const handleEdit = () => {
        const name = inputName.current.value
        const img = inputImage.current.value
        const rate = inputRate.current.value
        const id= Math.floor(Math.random())
       setState([...state,{img, name, rate, id}]); //after maping all items stored in the state 

    }

    
    console.log(inputName);
    console.log(edit);
  return (

<div>

{edit.map ((x) =>  // maped the edit state
    <div>
    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control defaultValue={x.name} ref={inputName} placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="formImage">
                            <Form.Label>Image </Form.Label>
                            <Form.Control defaultValue={x.img} ref={inputImage} placeholder="Enter image URL" />
                        </Form.Group>

                        <Form.Group controlId="formRate">
                            <Form.Label>Rate</Form.Label>
                            <Form.Control defaultValue={x.rate} ref={inputRate} placeholder="Enter rate" />
                        </Form.Group>
                    </Form>
    </div>
    
    

)}
        <Button variant="primary" onClick={handleEdit}>Change</Button>


        
</div>

    
  );
}

export default EditProduct;




