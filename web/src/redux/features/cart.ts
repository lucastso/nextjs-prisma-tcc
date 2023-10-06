"use client";

import { ProductProps } from "@/types/product_props";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cartItems: ProductProps[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    add: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
