import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/Slices/productSlices";

const Modal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.products.length);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      id: parseInt(id + 1), 
      price: parseFloat(formData.price), 
      rating: {
        rate: parseFloat(formData.rating.rate), 
        count: parseInt(formData.rating.count), 
      },
    };

    dispatch(setProducts(newProduct));

    setFormData({
      id: "",
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    });
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("rating.")) {
      const ratingProperty = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        rating: {
          ...prevData.rating,
          [ratingProperty]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm ${
          isOpen ? "" : "hidden"
        }`}
        onClick={onClose}
      ></div>
      <div className="modal-container bg-white w-1/2 p-6 rounded shadow-lg relative">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-600 font-bold">
              ID: {id + 1}
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600 font-bold">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border border-gray-300 rounded py-2 px-3"
              placeholder="Enter Title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-600 font-bold">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="w-full border border-gray-300 rounded py-2 px-3"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-600 font-bold"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full border border-gray-300 rounded py-2 px-3"
              placeholder="Enter Description"
              rows="3"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-600 font-bold">
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="w-full border border-gray-300 rounded py-2 px-3"
              placeholder="Enter Category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-600 font-bold">
              Image URL:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="w-full border border-gray-300 rounded py-2 px-3"
              placeholder="Enter Image URL"
              value={formData.image}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="rating.rate"
              className="block text-gray-600 font-bold"
            >
              Rating Rate:
            </label>
            <input
              type="text"
              id="rating.rate"
              name="rating.rate"
              className="w-full border border-gray-300 rounded py-2 px-3"
              placeholder="Enter Rating Rate"
              value={formData.rating.rate}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="rating.count"
              className="block text-gray-600 font-bold"
            >
              Rating Count:
            </label>
            <input
              type="text"
              id="rating.count"
              name="rating.count"
              className="w-full border border-gray-300 rounded py-2 px-3"
              placeholder="Enter Rating Count"
              value={formData.rating.count}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-6 text-right">
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
