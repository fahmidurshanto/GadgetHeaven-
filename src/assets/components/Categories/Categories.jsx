import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Product from "../Product/Product";
import BlankProduct from "../BlankProduct/BlankProduct";

const Categories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Helper function to filter products based on category
  const filterProductsByCategory = (category) => {
    return products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
  };

  return (
    <>
      <Tabs className="flex items-start gap-5">
        <TabList className="flex flex-col gap-5">
          <Tab className="py-3 px-8 rounded-full shadow-md cursor-pointer border-0">All</Tab>
          <Tab className="py-3 px-8 rounded-full shadow-md cursor-pointer border-0">Computer</Tab>
          <Tab className="py-3 px-8 rounded-full shadow-md cursor-pointer border-0">Phones</Tab>
          <Tab className="py-3 px-8 rounded-full shadow-md cursor-pointer border-0">Gadgets</Tab>
          <Tab className="py-3 px-8 rounded-full shadow-md cursor-pointer border-0">Smart Watches</Tab>
          <Tab className="py-3 px-8 rounded-full shadow-md cursor-pointer border-0">Chargers</Tab>
          <Tab className="py-3 px-8 rounded-full shadow-md cursor-pointer border-0">Power Banks</Tab>
        </TabList>

        {/* All Products */}
        <TabPanel className="grow">
          <div className="grid md:grid-cols-3 gap-5">
            {products.map((product) => (
              <Product key={product.product_id} product={product} />
            ))}
          </div>
        </TabPanel>
        {/* Computers */}
        <TabPanel className="grow">
          <div className="grid md:grid-cols-3 gap-5">
            {filterProductsByCategory("computers").map((product) => (
              <Product key={product.product_id} product={product} />
            ))}
          </div>
        </TabPanel>
        {/* Phones */}
        <TabPanel className="grow">
          <div className="grid md:grid-cols-3 gap-5">
            {filterProductsByCategory("phones").map((product) => (
              <Product key={product.product_id} product={product} />
            ))}
          </div>
        </TabPanel>
          {/* Gadgets */}
          <TabPanel className="grow">
          <div className="grid md:grid-cols-3 gap-5">
            {filterProductsByCategory("gadgets").map((product) => (
              <Product key={product.product_id} product={product} />
            ))}
          </div>
        </TabPanel>
        {/* Smart Watches */}
        <TabPanel className="grow">
          <div className="grid md:grid-cols-3 gap-5">
            {filterProductsByCategory("smart-watches").map((product) => (
              <Product key={product.product_id} product={product} />
            ))}
          </div>
        </TabPanel>
        {/* Chargers */}
        <TabPanel className="grow">
          <div className="grid md:grid-cols-3 gap-5">
            {filterProductsByCategory("chargers").map((product) => (
              <Product key={product.product_id} product={product} />
            ))}
          </div>
        </TabPanel>
        {/* Power Banks */}
        <TabPanel className="grow">
          <div className="grid md:grid-cols-3 gap-5">
            {filterProductsByCategory("power-banks").map((product) => (
              <Product key={product.product_id} product={product} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Categories;
