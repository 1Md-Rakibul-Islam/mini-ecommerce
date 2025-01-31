"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../slices/cartSlice";
import { TProduct } from "@/types/product.interface";


export const useCart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.cart);

    return {
        cart,
        addToCart: (item: TProduct) => dispatch(addToCart(item)),
        removeFromCart: (id: number) => dispatch(removeFromCart(id)),
        increaseQuantity: (id: number) => dispatch(increaseQuantity(id)),
        decreaseQuantity: (id: number) => dispatch(decreaseQuantity(id)),
        clearCart: () => dispatch(clearCart()),
    };
};
