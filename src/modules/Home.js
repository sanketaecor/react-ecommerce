import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import FeatureCard from '../components/FeatureCard'
import StatCard from '../components/StatCard'
import { Link } from 'react-router-dom'


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            const data = await response.json()
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <div>
            <Hero />
            <div className="flex flex-col text-center w-full">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Products</h1>
            </div>
            {
                products.length > 0 ?
                    <ProductCard products={products} /> :
                    <div className='text-center mt-5'>
                        Loading........
                    </div>
            }
            <div className="flex">
                <Link to={'/products'} className="flex-initial ml-auto mr-auto  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 text-base mt-4 md:mt-0 rounded-full">
                    View More
                </Link>
            </div>
            <StatCard />
        </div>
    )
}

export default Home
