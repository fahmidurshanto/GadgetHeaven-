import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Rating from "react-rating";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const products = useLoaderData();
  const productId = useParams();
  const [cart, setCart] = useState([]); // State to hold cart items
  const [wishlist, setWishlist] = useState([]); // State to hold wishlist items

  // Initialize cart and wishlist from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []);

  const product = products.find(
    (p) => p.product_id === Number(Object.values(productId))
  );

  const handleRatingChange = (newRating) => {
    console.log("User rated:", newRating);
  };

  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item.product_id === product.product_id);

    if (!isProductInCart) {
      // Add the product to the cart
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      toast("Product added to cart:", product);
      console.log(product);
    } else {
      toast("Product is already in the cart", {
        type: "error",
      });
    }
  };

  const handleAddToWishlist = () => {
    // Check if the product is already in the wishlist
    const isProductInWishlist = wishlist.some((item) => item.product_id === product.product_id);

    if (!isProductInWishlist) {
      // Add the product object to the wishlist
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to localStorage
      toast("Product added to wishlist:", product);
      console.log(product);
    } else {
      toast("Product is already in the wishlist", {
        type: "error",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white relative space-y-1.5 text-center mb-72">
      {/* header */}
      <Helmet>
        <title>{product?.product_title}</title>
      </Helmet>
      <div className="bg-[#9538E2] text-center w-full pb-52">
        <h1 className="text-4xl font-bold">Product details</h1>
        <p className="text-gray-300">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="flex gap-5 justify-center items-center space-y-1.5 bg-white rounded-xl w-2/3 absolute top-1/2">
        {/* product image */}
        <img className="w-1/3 rounded-xl" src={product.product_image} alt={product.product_title} />
        <div className="text-black">
          {/* product information */}
          <div className="text-start mb-5 p-5">
            <h3 className="text-3xl font-bold mb-4">{product?.product_title}</h3>
            <h4 className="text-xl font-bold mb-4">Price: ${product?.price}</h4>
            <p>
              {product?.availability === true ? (
                <p className="text-green-600 py-2 px-4 border rounded-full border-green-600">
                  In Stock
                </p>
              ) : (
                <p className="text-red-600 py-2 px-4 border border-red-600 rounded-full">
                  Out of Stock
                </p>
              )}
            </p>
            <p className="font-extralight">{product?.description}</p>
            <p className="text-2xl font-bold">Specifications:</p>
            {product?.Specification.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
            <div className="flex flex-col my-4 text-start">
              <p className="font-bold mb-1.5">Rating: {product?.rating}</p>
              <Rating
                className="text-amber-500"
                initialRating={product?.rating}
                maxStars={5}
                onRate={handleRatingChange}
              />
            </div>

            <div className="flex items-center gap-4">
              {/* cart icon */}
              <button className="btn bg-[#9538E2] text-white" onClick={handleAddToCart}>
                Add to Cart <FaCartArrowDown className="text-white" />
              </button>
              {/* heart icon */}
              <button
                className="btn bg-[#9538E2]"
                onClick={handleAddToWishlist}
                disabled={wishlist.some((item) => item.product_id === product.product_id)} 
              >
                <FaRegHeart className="text-white" />
              </button>
              <ToastContainer></ToastContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;