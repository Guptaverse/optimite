import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faStar } from "@fortawesome/free-solid-svg-icons"; 

const SelectedProduct = () => {
  const products = useSelector((state) => state.products);

  const {productId}=useParams();
  const product = products[productId-1];
  
  console.log(product," product id : ",productId);
  return (
    <div className="flex justify-center items-center mt-10">

      <div className="w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-1/2 px-6">
        <h2 className="text-3xl font-semibold">{product.title}</h2>
        <p className="text-lg text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex items-center mb-4">
          {/* <svg
            className="w-6 h-6 text-yellow-500 mr-2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2s-2.577 4.477-4.577 8.477c-1 1 0 2.308 1 2.308H15.58c1 0 1.577-1.308 1.154-2.308C16.577 6.477 14 2 14 2"></path>
            <path
              d="M12 16s-2.577 4.477-4.577 8.477c-1 1 0 2.308 1 2.308H15.58c1 0 1.577-1.308 1.154-2.308C16.577 20.477 14 16 14 16"
              opacity="0.5"
            ></path>
          </svg> */}
            <FontAwesomeIcon
                icon={faStar}
                className="w-6 h-6 text-yellow-500 mr-2"
              />
          <span className="text-gray-700">{product.rating.rate}</span>
          <span className="text-gray-500 ml-2">({product.rating.count} reviews)</span>
        </div>
        

        <p className="text-2xl text-green-600 font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default SelectedProduct;
