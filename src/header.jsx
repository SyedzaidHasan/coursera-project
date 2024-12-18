import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cart }) {
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <div className="cart-icon">
            🛒 ({cartItemCount})
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
