import { useNavigate } from "react-router-dom";
import { CgSearchFound } from "react-icons/cg";
import { Helmet } from "react-helmet";

const NoProductsFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center text-black gap-10 text-center my-10 py-5">
        <Helmet>
        <title>No Products Found</title>
        </Helmet>
      <div>
        <CgSearchFound className="text-7xl mx-auto" />
        <h1 className="text-4xl font-bold text-red-500">No Products Found</h1>
        <p className="text-2xl text-gray-600">
          Your cart is empty.
        </p>
        <p className="text-gray-500">
          Please try again or explore our collection.
        </p>
        <button onClick={handleGoBack} className="btn bg-[#9538E2] text-white mt-5">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default NoProductsFound;
