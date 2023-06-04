import React, { useState } from "react";
import Header from './Components/Header/Header';
import Basket from './Components/Basket/Basket';
import Main from './Components/Main/Main';
import './App.css';
import data from './data';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x);
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, {...product, qty: 1}];
      setCartItems(newCartItems);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x);
      setCartItems(newCartItems);
    };
    };
  return (
    <div>
      <Header countCartItems={cartItems.length}/>
      <div className="row">
        <Main cartItems={cartItems} 
              onAdd={onAdd} 
              onRemove={onRemove} 
              products={products}/>
        <Basket cartItems={cartItems} 
                onAdd={onAdd} 
                onRemove={onRemove}/>
      </div>
    </div>  
  );
}

export default App;
