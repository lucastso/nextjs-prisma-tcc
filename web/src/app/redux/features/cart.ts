'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
  cartItems: []
}

const initialState: CartState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    add: (state, action) => {
      state.cartItems = []
    },
    remove: (state) => {
      state.cartItems = []
    },
    increment: (state, action) => {
      state.cartItems = []
    },
  },
})

export const { add, remove, increment } = cartSlice.actions
export default cartSlice.reducer
