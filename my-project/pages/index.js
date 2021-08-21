import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../cartSlice";

import Link from 'next/link'
import Navigation from "../components/Navigation/index"

export default function Home() {
  const cart = useSelector(state => state.cart)
  console.log("cart:", cart)
  const dispatch = useDispatch();

  const productData = require("../productData.json");

  const addProduct = (values) => {
    const action = addToCart(values)
    dispatch(action);
  }
  const renderData = (datas) => {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:py-9 sm:px-3 lg:max-w-7xl lg:px-3">
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
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {datas.map((product) => (
              <div key={product.id} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg"
                    alt={product.productName}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{product.productName}</h3>
                  <p>${product.price}</p>
                </div>
                <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md flex my-2"
                  onClick={() => { addProduct(product) }}>
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
            ))}
          </div>
        </div>
      </div>)
  };

  return (
    <>
      <Navigation />
      {renderData(productData)}
    </>
  );
}
