import React from 'react';
import Link from 'next/link';
import { AiOutlineSearch, AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">xShopping</Link>
      </p>

      <div>
        <button type="button" 
          className="nav-icon">
          <AiOutlineSearch />
        </button>

        <button type="button" 
          className="nav-icon">
          <AiOutlineUser />
        </button>

        <button type="button"
          className="nav-icon" onClick={() => setShowCart(true)}>

          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span> 
        </button>
      </div>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar