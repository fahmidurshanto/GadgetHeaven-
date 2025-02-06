import  { useState } from 'react';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('cart');
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Gadget A', image: 'imageA.jpg', price: 100 },
    { id: 2, name: 'Gadget B', image: 'imageB.jpg', price: 200 },
    { id: 3, name: 'Gadget C', image: 'imageC.jpg', price: 150 },
  ]);
  const [wishListItems, setWishListItems] = useState([
    { id: 4, name: 'Gadget D', image: 'imageD.jpg', price: 120 },
    { id: 5, name: 'Gadget E', image: 'imageE.jpg', price: 80 },
  ]);

  const handleSortByPrice = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedItems);
  };

  const totalCartPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="dashboard-page p-4">
      <div className="tabs flex space-x-4 mb-4">
        <button
          className={`tab-button ${activeTab === 'cart' ? 'font-bold' : ''}`}
          onClick={() => setActiveTab('cart')}
        >
          Cart
        </button>
        <button
          className={`tab-button ${activeTab === 'wishlist' ? 'font-bold' : ''}`}
          onClick={() => setActiveTab('wishlist')}
        >
          Wish List
        </button>
      </div>

      {activeTab === 'cart' && (
        <div className="cart-tab">
          <h2 className="text-lg font-semibold mb-2">Cart Items</h2>
          <button
            className="sort-button bg-blue-500 text-white px-3 py-1 rounded mb-4"
            onClick={handleSortByPrice}
          >
            Sort by Price
          </button>
          <ul className="cart-items space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="item-card flex items-center space-x-4 p-2 border rounded">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <div>
                  <h3 className="text-md font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price mt-4 text-md font-medium">
            Total Price: ${totalCartPrice}
          </div>
        </div>
      )}

      {activeTab === 'wishlist' && (
        <div className="wishlist-tab">
          <h2 className="text-lg font-semibold mb-2">Wish List Items</h2>
          <ul className="wishlist-items space-y-2">
            {wishListItems.map((item) => (
              <li key={item.id} className="item-card flex items-center space-x-4 p-2 border rounded">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <div>
                  <h3 className="text-md font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
