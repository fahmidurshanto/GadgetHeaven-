import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch("products.json")
        .then(res=> res.json())
        .then(data=> setProducts(data))
        .catch(error => console.log(error))
    },[])


    return (
        <div className="flex-grow text-center p-10 shadow-2xl rounded-md">
            <h2 className="text-3xl font-semibold">Explore Cutting-Edge Gadgets</h2>
            <h1>Products: {products.length}</h1>

            {
                products.map((product, idx) => <Product key={idx} product={product}></Product>)
            }
        </div>
    );
};

export default Products;