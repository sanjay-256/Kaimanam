import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Cart from '../src/components/Cart';
import Home from '../src/components/Home';
import Order from './components/Order';
import { createContext, useEffect, useState } from 'react';
import Select from './components/Select';
import Cards from './components/Cards';

export const dataContext = createContext();

function App() {
  
const[load,setLoad]=useState(true);
const [data,setData]=useState([]);

useEffect(()=>{
  setTimeout(()=>{
    setLoad(false);
  },5000)
},[]);
if(load){
  return(
    <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="loader-container">
            <img src="loader1.gif" alt="logo" className='img-fluid'/>
        </div>
      </div>
  );
}

  return (
    <>
      <dataContext.Provider value={{data,setData}}>
        <BrowserRouter>
          <Header count={data}/>
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/select' element={<Select />} />
              <Route path='/menu' element={<Cards />} />
              {/* <Route  path="/order/:category" element={<Order />} /> */}
              <Route  path="/order" element={<Order />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </dataContext.Provider>
    </>
  )
}

export default App
