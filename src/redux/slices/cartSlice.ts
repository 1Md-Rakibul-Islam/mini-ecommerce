"use client";

import { TProduct } from "@/types/product.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = TProduct & { quantity: number };

interface CartState {
    cartItems: CartItem[];
    totalPrice: number;
    totalQuantity: number;
}

const getLocalStorage = (): CartItem[] => {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem("cart") || "[]");
    }
    return [];
};

const initialState: CartState = {
    cartItems: getLocalStorage(),
    totalPrice: 0,
    totalQuantity: 0,
};

const updateLocalStorage = (cartItems: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
};

const calculateTotals = (cartItems: CartItem[]) => {
    return cartItems.reduce(
        (totals, item) => {
            totals.totalPrice += item.price * item.quantity;
            totals.totalQuantity += item.quantity;
            return totals;
        },
        { totalPrice: 0, totalQuantity: 0 }
    );
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TProduct>) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            updateLocalStorage(state.cartItems);
            Object.assign(state, calculateTotals(state.cartItems));
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            updateLocalStorage(state.cartItems);
            Object.assign(state, calculateTotals(state.cartItems));
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item) item.quantity += 1;
            updateLocalStorage(state.cartItems);
            Object.assign(state, calculateTotals(state.cartItems));
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
            updateLocalStorage(state.cartItems);
            Object.assign(state, calculateTotals(state.cartItems));
        },
        clearCart: (state) => {
            state.cartItems = [];
            updateLocalStorage([]);
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
