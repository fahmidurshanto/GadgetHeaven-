/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Product = ({product}) => {

    const {product_id, product_title, product_image,  price} = product;
    return (
        <div className="p-4 shadow-md rounded-2xl">
            <img className="h-44 rounded-xl shadow-md w-full" src={product_image} alt={product_title} />
            <h3 className="text-2xl font-semibold text-start mt-3">{product_title}</h3>
            <p className="text-gray-500 text-start mb-3">Price: {price}K</p>
            <Link to={`/productDetails/${product_id}`}><button className="text-violet-500 py-3 px-8 border-2 border-violet-500 rounded-full cursor-pointer hover:bg-gray-300">View Details</button></Link>
        </div>
    );
};

export default Product;