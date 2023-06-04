import React from "react";
import './Header.css';

const Header = (props) => {
  const {countCartItems} = props;
    return (
      <div className="row center block">  
        <div>
          <a href="#"><h2>Simple Shopping Cart</h2>
          </a>
        </div>
        <div>
          <a href="#/cart">
            Cart
          {countCartItems ? (
          <button className="badge">{countCartItems}</button>
          ) : (
            ''
            )}
          </a>{' '} 
          <a href="#/signin">Sign-In</a>  
        </div>
      </div>

    )
}

export default Header;