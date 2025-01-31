import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;