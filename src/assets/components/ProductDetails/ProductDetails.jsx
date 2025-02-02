import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const products = useLoaderData();
  const productId = useParams()
  console.log(Number(Object.values(productId)));

  const product = products.find((p) => p.product_id === Number(Object.values(productId)));
  console.log(product);
  



  return (
    <div className="flex flex-col justify-center items-center bg-[#9538E2] text-white relative">
      {/* {
        products.find(product => parseInt(product.product_id) === parseInt(productId))
      } */}
    </div>
  );
};

export default ProductDetails;
