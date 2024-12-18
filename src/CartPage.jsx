import React from 'react';

function CartPage({ cart, removeFromCart, updateCartQuantity }) {
  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className='cart-page'>
      <h2>Your Cart</h2>
      <div className='cart-items'>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div >
            {cart.map((item) => (
              <div className='cart-item' key={item.id}>
                <img src={item.thumblain} alt={item.name} />
                <p>{item.name} - Rs{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <h3>Total Cost: Rs{totalCost}</h3>
          </div>
        )}
        <button>Checkout (Coming Soon)</button>
        <button>
          <a href="/products">Continue Shopping</a>
        </button>
      </div>
    </div>
  );
}

export default CartPage;
