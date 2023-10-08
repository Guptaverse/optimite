import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortProducts } from "../redux/Slices/productSlices";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faStar } from "@fortawesome/free-solid-svg-icons"; 

const ListingProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(products);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSorting = () => {
    dispatch(sortProducts());
  };

  return (
    <>
      <div className="flex justify-end  w-[100%] px-5 py-5">
        <button
          className="text-white w-10rem bg-blue-400 py-3 px-3 rounded mx-4 hover:bg-blue-600"
          onClick={openModal}
        >
          Add New Product
        </button>
        <button
          className="text-white w-10rem bg-blue-400 py-3 px-3 rounded mx-4 hover:bg-blue-600"
          onClick={handleSorting}
        >
          Sort by price
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div className="flex justify-center w-[100%] py-10 bg-[#5668EF]">
        <div className="flex flex-row flex-wrap w-[80%] justify-around">
          {products.map((item) => (
            <div
              className="max-w-xs rounded overflow-hidden shadow-lg mb-10 mx-4 bg-white"
              key={item.id}
              onClick={() => {
                navigate(`/product/${item.id}`);
              }}
            >
              <img src={item.image} alt="Product" className="h-[300px] m-auto" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p
                  className="text-gray-700 text-base"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "270px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.description}
                </p>
                <p className="text-gray-800 text-lg mt-2">{`$${item.price}`}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {item.category}
                </span>
                <div className="mt-2 flex items-center">
                    <FontAwesomeIcon
                    icon={faStar}
                    className="w-6 h-6 text-yellow-500 mr-2"
                  />
                  <span className="text-gray-700">
                    {`${item.rating?.rate ?? 0}(${item.rating?.count ?? 0})`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListingProduct;
