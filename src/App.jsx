import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ShopMen from './components/ShopMen'
import ShopWomen from './components/ShopWomen'
import Collection from './components/Collection'
import ViewDetails from './components/ViewDetails'
import Footer from './components/Footer'
import BasicExample from './components/Navbar'
import Body from './components/Body'
import { context } from './components/Context'
import {Cart}  from './components/Cart'
import Login from './components/Login'
import AdminNav from './components/adminPage/adminPage'
import Dashbord from './components/adminPage/Dashbord'
import UsersAdmin from './components/adminPage/usersAdmin'
import EditProduct from './components/EDIT'

function App() {
  const location =useLocation(); // location  for admin page
  const [change,setChange] =useState(false); // for navbar
  const [state,setState]=useState([]); // data transfer 
  const [cart,setCart]=useState([]); // for cart
  const [input, setInput] = useState([]) // for login page
  const [edit, setEdit] = useState([]); // for Edit admin products

  const data={cart,setCart,state,setState,input,setInput,edit,setEdit};

  useEffect(()=> {
    if(location.pathname.includes('admin')){
      setChange(true);
    }
    else{
      setChange(false)
    }

  },[location]); // on dependency arrays add location


  return (

    <>
    <context.Provider value={data}>
    {change?null: <BasicExample/>}
   
    <Routes>
    
    <Route path='/' element={<Body/>} />
    <Route path='/ShopMen' element={<ShopMen/>} />
    <Route path='/ShopWomen' element={<ShopWomen/>} />
    <Route path='/Collection' element={<Collection/>} />
    <Route path='/view/:id' element={<ViewDetails/>} />  {/* parms id passed throw on route path */}
    <Route path='/cart' element={<Cart/>} />
    <Route path='/Login' element={<Login/>} />

    {/*<Route path='/adminPage' element={isAdmin ? <AdminNav /> : <Navigate to='/login' />} />} */}
    <Route path='/admin' element={<AdminNav/>} />
    <Route path='/dashbord' element={<Dashbord/>} />
    <Route path='/User' element={<UsersAdmin/>} />
    <Route path='/Edit/:id' element={<EditProduct/>} />

    </Routes>
    </context.Provider>
    {change?null:<Footer/>}
    
  
    </>
  )
}

export default App
