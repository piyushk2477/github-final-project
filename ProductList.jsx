import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedNodes, setAddedNodes] = useState({});
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Plant Categories and Items Data (3 categories x 6 plants = 18 plants)
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improves air quality.", cost: "$15" },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from indoor air.", cost: "$12" },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes mold spores and purifies air.", cost: "$18" },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Natural air humidifier and toxin remover.", cost: "$20" },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/05/17/04/40/rubber-plant-5180062_1280.jpg", description: "Easy-to-grow air purifier with dark glossy leaves.", cost: "$22" },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/17/38/aloe-vera-3284503_1280.jpg", description: "Purifies air and offers medicinal gel.", cost: "$14" }
      ]
    },
    {
      category: "Aromatic & Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/07/07/14/02/lavender-2481524_1280.jpg", description: "Calming aroma that promotes relaxation and sleep.", cost: "$20" },
        { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2018/06/20/14/08/jasmine-3486588_1280.jpg", description: "Sweet-scented white flowers that bloom beautifully.", cost: "$25" },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2017/05/23/16/23/rosemary-2337655_1280.jpg", description: "Fragrant herb great for cooking and air freshness.", cost: "$15" },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/29/18/13/mint-1168453_1280.jpg", description: "Refreshing scent, fast-growing kitchen staple.", cost: "$10" },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2017/06/19/20/08/lemon-balm-2420790_1280.jpg", description: "Citrusy fragrance that reduces stress.", cost: "$12" },
        { name: "Eucalyptus", image: "https://cdn.pixabay.com/photo/2020/03/10/16/47/eucalyptus-4919502_1280.jpg", description: "Invigorating minty scent with medicinal properties.", cost: "$18" }
      ]
    },
    {
      category: "Low Maintenance & Succulents",
      plants: [
        { name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2021/01/29/14/42/zz-plant-5961208_1280.jpg", description: "Thrives in low light with minimal watering needs.", cost: "$25" },
        { name: "Pothos", image: "https://cdn.pixabay.com/photo/2020/06/07/04/16/pothos-5268953_1280.jpg", description: "Extremely resilient trailing vine plant.", cost: "$12" },
        { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2016/11/21/16/06/jade-plant-1846178_1280.jpg", description: "Classic succulent symbol of good luck.", cost: "$16" },
        { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2019/07/11/08/04/plant-4330206_1280.jpg", description: "Survives neglect, low light, and temperature changes.", cost: "$28" },
        { name: "Haworthia", image: "https://cdn.pixabay.com/photo/2019/09/25/11/17/haworthia-4503370_1280.jpg", description: "Compact, slow-growing zebra succulent.", cost: "$10" },
        { name: "Echeveria", image: "https://cdn.pixabay.com/photo/2017/08/07/19/43/succulent-2607106_1280.jpg", description: "Beautiful rosette-shaped drought-tolerant plant.", cost: "$11" }
      ]
    }
  ];

  // Calculate total count of items currently in the cart
  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedNodes((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
          <h3>Paradise Nursery</h3>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#" onClick={onHomeClick}>Home</a>
          </li>
          <li>
            <a href="#" onClick={handlePlantsClick}>Plants</a>
          </li>
          <li>
            <a href="#" onClick={handleCartClick} className="cart-icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="30px" height="30px">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              <span className="cart-badge">{calculateTotalQuantity()}</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Conditional Rendering: Cart View vs Product Catalog View */}
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <div className="product-grid-container">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{categoryObj.category}</h2>
              <div className="product-list">
                {categoryObj.plants.map((plant, plantIndex) => {
                  const isAdded = addedNodes[plant.name] || cartItems.some(item => item.name === plant.name);
                  return (
                    <div key={plantIndex} className="product-card">
                      <img src={plant.image} alt={plant.name} className="product-image" />
                      <div className="product-title">{plant.name}</div>
                      <div className="product-description">{plant.description}</div>
                      <div className="product-price">{plant.cost}</div>
                      <button
                        className={`add-to-cart-btn ${isAdded ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
