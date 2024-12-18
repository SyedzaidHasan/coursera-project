import React, { useState } from 'react';

function ProductListingPage({ addToCart }) {
  const plants = [
    { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulent',thumblain: 'https://images.pexels.com/photos/1634502/pexels-photo-1634502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Snake Plant', price: 15, category: 'Indoor', thumblain: 'https://images.pexels.com/photos/1383044/pexels-photo-1383044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Fiddle Leaf Fig', price: 30, category: 'Indoor',thumblain:'https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Peace Lily', price: 25, category: 'Indoor',thumblain:'https://images.pexels.com/photos/680315/pexels-photo-680315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 5, name: 'Cactus', price: 8, category: 'Succulent',thumblain:'https://images.pexels.com/photos/4973060/pexels-photo-4973060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 6, name: 'Spider Plant', price: 12, category: 'Indoor',thumblain:'https://images.pexels.com/photos/2421953/pexels-photo-2421953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ' },
  ];

  const categories = ['Indoor', 'Succulent'];

  return (
    <div className='product-name'>
      <h2>Products</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="product-list">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="product-card">
                  <img src={plant.thumblain} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button onClick={() => addToCart(plant)}>Add to Cart</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;
