import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the default styles
import { toast, ToastContainer } from 'react-toastify';
import NoProductsFound from '../NoProductsFound/NoProductsFound';
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  console.log("cart", cart, "wishlist", wishlist);

  // State to manage sorted cart
  const [sortedCart, setSortedCart] = useState(cart);

  // Calculate the total cost of items in the cart
  const totalCost = sortedCart.reduce((total, item) => total + parseFloat(item.price || 0), 0);

  // Function to sort cart by price in descending order
  const sortCartByPrice = () => {
    const sorted = [...cart].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    setSortedCart(sorted);
  };

  // Function to handle purchase
  const handlePurchase = () => {
    toast(`Purchase successful! Total cost: $${totalCost.toFixed(2)}`);
    
    // Clear the cart
    localStorage.setItem("cart", JSON.stringify([])); // Update localStorage
    setSortedCart([]); // Reset the sortedCart state
  };

  return (
    <div className='bg-white'>
      <Helmet>
        <title>Dashboard | GadgetHeaven</title>
      </Helmet>
      <ToastContainer></ToastContainer>
      <div className="bg-[#9538E2] text-center w-full space-y-1.5">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-300">
          Your central hub for insights, trends, and control—everything you need, all in one place.
        </p>
      </div>

      <Tabs className='bg-white'>
        <TabList className="flex justify-center bg-[#9538E2] items-center gap-5 py-11">
          <Tab className="bg-[#9538E2] rounded-full btn btn-outline hover:bg-white hover:text-black cursor-pointer">Cart</Tab>
          <Tab className="bg-[#9538E2] rounded-full btn btn-outline hover:bg-white hover:text-black cursor-pointer">Wishlist</Tab>
        </TabList>

        <TabPanel>
          {cart.length > 0 ? <div className='text-black p-5'>
           <div className='flex justify-between items-center p-5 bg-white text-black'>
           <h2 className='text-3xl font-bold'>Cart</h2>
            <h2 className='text-2xl font-semibold'>Total Cost: ${totalCost.toFixed(2)}</h2>
            <button
              className='btn btn-outline btn-secondary'
              onClick={sortCartByPrice}
            >
              Sort by Price
            </button>
            <button 
              className='text-white bg-pink-500 py-3 px-6 cursor-pointer hover:text-pink-500 hover:bg-white hover:border-2 hover:border-pink-500 font-bold rounded-full'
              onClick={handlePurchase} 
            >
              Purchase
            </button>
           </div>
            {sortedCart.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-5 my-5 bg-white text-black shadow-2xl gap-5">
                <img src={item?.product_image}  className='w-1/6' />
                <div className='flex flex-col justify-around items-center gap-5'>
                  <h3 className="text-xl font-semibold">{item?.product_title}</h3>
                  <p className="text-gray-500">Price: ${item?.price}</p>
                  <p>{item?.description}</p>
                  <button className='btn btn-outline border-green-500'>{item.availability ? "In Stock": "Out of stock"}</button>
                </div>
                  <p><span className='font-bold'>Rating:</span> {item?.rating}</p>
                <div className="text-red-500 hover:bg-gray-400 hover:text-white  p-2 cursor-pointer rounded-full">
                <RxCross1 />
                </div>
                
              </div>
            ))}
          </div> : <NoProductsFound></NoProductsFound> }
        </TabPanel>

        <TabPanel>
          {wishlist.length > 0 ? <div className='text-black p-5'>
           <div className='flex justify-between items-center p-5 bg-white text-black'>
           <h2 className='text-3xl font-bold'>Cart</h2>
            <h2 className='text-2xl font-semibold'>Total Cost: ${totalCost.toFixed(2)}</h2>
            <button
              className='btn btn-outline btn-secondary'
              onClick={sortCartByPrice}
            >
              Sort by Price
            </button>
            <button 
              className='text-white bg-pink-500 py-3 px-6 cursor-pointer hover:text-pink-500 hover:bg-white hover:border-2 hover:border-pink-500 font-bold rounded-full'
              onClick={handlePurchase} 
            >
              Purchase
            </button>
           </div>
            {sortedCart.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-5 my-5 bg-white text-black shadow-2xl gap-5">
                <img src={item?.product_image}  className='w-1/6' />
                <div className='flex flex-col justify-around items-center gap-5'>
                  <h3 className="text-xl font-semibold">{item?.product_title}</h3>
                  <p className="text-gray-500">Price: ${item?.price}</p>
                  <p>{item?.description}</p>
                  <button className='btn btn-outline border-green-500'>{item.availability ? "In Stock": "Out of stock"}</button>
                </div>
                  <p><span className='font-bold'>Rating:</span> {item?.rating}</p>
                <div className="text-red-500 hover:bg-gray-400 hover:text-white  p-2 cursor-pointer rounded-full">
                <RxCross1 />
                </div>
                
              </div>
            ))}
          </div> : <NoProductsFound></NoProductsFound> }
        </TabPanel>

      
      </Tabs>
    </div>
  );
};

export default Dashboard;