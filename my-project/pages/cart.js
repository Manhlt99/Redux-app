import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { increaseQuantity, decreaseQuantity, deteleItem } from "../cartSlice";

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


    useEffect(() => {

    }, [])
    const renderCart = (data) => {
        return data.map((item, idx) => (
            <div className="flex mb-3" key={idx}>
                {item.productName}
                <div className="flex">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded mx-2"
                        onClick={() => { decrease(item.id) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded mx-2"
                        onClick={() => { increase(item.id) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
                $ {item.price} |
                SubTotal: $ {Number(item.price) * item.quantity}
                <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded mx-2"
                    onClick={() => { deleteItem(item.id) }}>Delete
                </button>

            </div>
        ))
    }
    return (
        <div className="m-20">
            <h2 className="text-3xl font-bold mb-3">CART</h2>
            <div className="text-lg mb-3">
                {cart.length === 0 ? "YOUR CART IS EMPTY!!" : renderCart(cart)}
            </div>
            <div className="flex">
                <h2 className="text-3xl font-black">Total: ${calTotalBill()}</h2>
                <button className="bg-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-red-500 rounded ml-3"
                    onClick={purchaseBill}>
                    Purchase
                </button>
            </div>
        </div>
    );
}

export default cart;