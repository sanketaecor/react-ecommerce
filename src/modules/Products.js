import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FeatureCard from "../components/FeatureCard";

const Products = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  if(categories.length === 0 ) return <div>Loading....</div>

  return (
    <div>
      {categories.length > 0 ? (<FeatureCard categories={categories} />) : (<div className="text-center mt-5">Loading........</div>)}
        <div className="flex flex-col text-center w-full">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
        </div>
      {products.length > 0 ? (<ProductCard products={products} />) : (<div className="text-center mt-5">Loading........</div>)}
    </div>
  );
};

export default Products;
