import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../cartSlice";

import Link from 'next/link'

export default function Home() {
  const cart = useSelector(state => state.cart)
  console.log("cart:", cart)
  const dispatch = useDispatch();

  const productData = require("../productData.json");

  const addProduct = (values) => {
    const action = addToCart(values)
    dispatch(action);
  }
  const renderData = (data) => {
    return data.map((item, idx) => (
      <div key={idx}>
        <div
          className="
              bg-white
              shadow-md
              h-96
              rounded-3xl
              flex
              justify-around
              items-center
              overflow-hidden
              my-4
              sm:flex-row sm:h-52 sm:w-3/5
              md:w-96
            "
        >
          <img
            className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
            src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
            alt="image"
          />

          <div
            className="
                flex-1
                w-full
                flex flex-col
                items-baseline
                justify-around
                h-1/2
                pl-6
                sm:h-full sm:items-baseline sm:w-1/2
              "
          >
            <div className="flex flex-col justify-start items-baseline">
              <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                {item.productName}
              </h1>
            </div>
            <div className="w-full justify-between items-center">
              <h1 className="font-bold text-gray-500 my-3">${item.price}</h1>
              <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md flex"
                onClick={() => { addProduct(item) }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="mx-28">
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold my-6">Product List</h2>
        <Link href="/cart">
          <div className="flex text-3xl cursor-pointer bg-indigo-900 px-5 py-3 h-full mt-2 text-white rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg><span className="ml-1 font-bold">{cart.length}</span>
          </div>
        </Link>
      </div>
      <div className="bg-gray-100 w-full justify-between p-5 flex flex-wrap">
        {renderData(productData)}
      </div>
    </div>
  );
}
