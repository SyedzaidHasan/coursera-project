import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductListingPage from './ProductListingPage';
import CartPage from './CartPage';
import Header from './header';

function App() {
  const [cart, setCart] = useState([]);

  // Add to Cart functionality
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove from Cart functionality
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update cart item quantity
  const updateCartQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <Router>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={<ProductListingPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
