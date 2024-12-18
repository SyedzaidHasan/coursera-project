import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Green Leaf Plants</h1>
      <p>Your one-stop shop for all your indoor plant needs!</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
