import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex-col space-y-4 text-left px-6">
        <div className="text-7xl font-bold text-violet-700">OOPS !</div>
        <div className="text-stone-500 font-medium">
          Cart is empty! Add Items to Cart.
        </div>
        <div className="flex space-x-4 items-center justify-start">
          <a href="#">
            <div className="bg-violet-700 px-4 py-1 text-white font-medium border-2 border-gray-400  hover:scale-105 cursor-pointer">
              <ion-icon name="arrow-back-sharp"></ion-icon>
            </div>
          </a>
          <Link to={'/products'} className="text-sm font-medium text-stone-500">
            Back to Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmptyCart
