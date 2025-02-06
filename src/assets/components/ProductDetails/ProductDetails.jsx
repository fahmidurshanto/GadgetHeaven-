import { useLoaderData, useParams } from "react-router-dom";
import Rating from "react-rating";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
  const products = useLoaderData();
  const productId = useParams();
  console.log(Number(Object.values(productId)));

  const product = products.find(
    (p) => p.product_id === Number(Object.values(productId))
  );

  const handleRatingChange = (newRating) => {
    console.log("User rated:", newRating);
  };

  return (
    <div className="flex flex-col justify-center items-center  text-white relative space-y-1.5 text-center mb-72">
      {/* header */}
      <div className="bg-[#9538E2] text-center w-full pb-52">
        <h1 className="text-4xl font-bold">Product details</h1>
        <p className="text-gray-300">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>


      <div className="flex gap-5 justify-center items-center space-y-1.5 bg-white rounded-xl w-2/3 absolute top-1/2">
      {/* product image */}
        <img  className="w-1/3 rounded-xl" src={product.product_image} />
        <div className="text-black">
          {/* product information */}
          <div className="text-start mb-5 p-5">
            <h3 className="text-3xl font-bold mb-4">
              {product?.product_title}
            </h3>
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
            <p className="font-extralight ">{product?.description}</p>
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
            <button className="btn bg-[#9538E2] text-white">
              Add to Cart <FaCartArrowDown className="text-white" />
            </button>
            <button className="btn bg-[#9538E2]"><FaRegHeart className="text-white"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
