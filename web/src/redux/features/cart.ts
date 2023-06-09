'use client'

import { ProductProps } from '@/types/product_props'
import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
  cartItems: ProductProps[]
}

const initialState: CartState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    add: (state, action) => {
      state.cartItems.push(action.payload)
    },
    remove: (state, action) => {},
  },
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer
