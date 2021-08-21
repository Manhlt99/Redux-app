import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { increaseQuantity, decreaseQuantity, deteleItem } from "../cartSlice";
import Navigation from "../components/Navigation/index"

function cart(props) {
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const increase = (id) => {
        const increaseQty = increaseQuantity(id);
        dispatch(increaseQty);
    }

    const decrease = (id) => {
        const decreaseQty = decreaseQuantity(id);
        dispatch(decreaseQty);
    }

    const deleteItem = (id) => {
        const deleteProduct = deteleItem(id);
        dispatch(deleteProduct)
    }

    const calTotalBill = () => {
        let totalBill = 0;
        for (let i = 0; i < cart.length; i++) {
            let subTotal = cart[i].price * cart[i].quantity
            totalBill += subTotal
        }
        return totalBill;
    }

    const purchaseBill = () => {
        alert("Purchase successfully!!!")
    };
    const renderCart = (data) => {
        return (
            <div className="bg-white">
                <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>

                            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                                {data.map((product, productIdx) => (
                                    <li key={product.id} className="flex py-6 sm:py-10">
                                        <div className="flex-shrink-0">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg"
                                                alt={product.productName}
                                                className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                                            />
                                        </div>

                                        <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <h3 className="text-sm">
                                                        {product.productName}
                                                    </h3>
                                                    <p className="mt-1 text-sm font-medium text-gray-900">${product.price}</p>
                                                </div>
                                                <div className="flex">
                                                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded mx-4"
                                                        onClick={() => { decrease(product.id) }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                        </svg>
                                                    </button>
                                                    <span className="font-bold text-2xl">{product.quantity}</span>
                                                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded mx-4"
                                                        onClick={() => { increase(product.id) }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                        </svg>
                                                    </button>
                                                    <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded"
                                                        onClick={() => { deleteItem(product.id) }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Order summary */}
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                        >
                            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                                Order summary
                            </h2>

                            <dl className="mt-6 space-y-4">
                                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                                    <dd className="text-base font-medium text-gray-900">${calTotalBill()}</dd>
                                </div>
                            </dl>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                    onClick={purchaseBill}
                                >
                                    Checkout
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Navigation />
            {renderCart(cart)}
        </>
    );
}

export default cart;