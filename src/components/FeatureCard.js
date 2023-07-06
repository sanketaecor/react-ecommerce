import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ categories = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            CATEGORIES
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Trending Categories
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {categories.map((category) => {
            return (
              <Link to = {`/categories/${category}`} className="p-4 md:w-1/4">
                <div className="flex rounded-lg h-full bg-gray-100 p-4 flex-col">
                  <div className="flex items-center">
                    <h2 className="text-gray-900 text-lg title-font font-medium capitalize ">
                      {category}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
