import React from "react";
import './Main.css';
import Product from '../Product';


const Main = (props) => {
    const { cartItems, products, onAdd, onRemove } = props;
    return (
        <div className="col-2 block" >
          <h2>Products</h2>
          <div className="row">
            {products.map((product) => (
                <Product onAdd={onAdd} 
                         onRemove={onRemove}
                         item={cartItems.find((x) => x.id === product.id)} 
                         key={product.id} 
                         product={product}>
                </Product>
        ))}
          </div>
        </div>
    )
};

export default Main;