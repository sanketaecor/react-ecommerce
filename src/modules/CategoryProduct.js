import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom';

const CategoryProduct = () => {
    const { name } = useParams();
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
        const data = await response.json();
        setProducts(data);
      };
      fetchProducts();
    }, []);
  
    if(!Object.keys(products).length > 0) return <div className="text-center m-10">Product Not Found</div>
  return (
    <div>
        <div className="flex flex-col text-center w-full mt-10">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">CATEGORY</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 capitalize">{name}</h1>
        </div>
      {products.length > 0 ? (<ProductCard products={products} />) : (<div className="text-center mt-5">Loading........</div>)}
    </div>
  )
}

export default CategoryProduct
