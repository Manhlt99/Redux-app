import { createSlice } from "@reduxjs/toolkit"

const cart = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            let cart = {
                id: action.payload.id,
                quantity: 1,
                productName: action.payload.productName,
                price: action.payload.price,
            }
            let check = false;
            state.forEach((item) => {
                if (item.id === action.payload.id) {
                    check = true
                }
            });
            if (!check) {
                state.push(cart);
            } else {
                state.flat().forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity += 1;
                    }
                });
            }
        },

        increaseQuantity: (state, action) => {
            state.flat().forEach((item) => {
                if (item.id === action.payload) {
                    item.quantity += 1;
                }
            });
        },

        decreaseQuantity: (state, action) => {
            state.flat().forEach((item) => {
                if (item.id === action.payload) {
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    }
                }
            });
        },

        deteleItem: (state, action) => {
            state = state.filter(cart => cart.id !== action.payload)
            return state
        }
    }
})

const { reducer, actions } = cart;
export const { addToCart, increaseQuantity, decreaseQuantity, deteleItem } = actions;
export default reducer;