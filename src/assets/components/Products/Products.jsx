import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch("products.json")
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])


    return (
        <div className="flex-grow text-center p-10 shadow-2xl rounded-md">
            <h2 className="text-3xl font-bold mb-10">Explore Cutting-Edge Gadgets</h2>

           <div className="grid md:grid-cols-3 gap-10">
           {
                products.slice(0,9).map((product, idx) => <Product key={idx} product={product}></Product>)
            }
           </div>
        </div>
    );
};

export default Products;