import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1  };
        state.cartItems.push(tempProduct);
      }
      

    },
    remove(state, action) {
      const nextCartItems = state.cartItems.filter((cartItem) => cartItem._id !== action.payload._id);
      state.cartItems = nextCartItems;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});
export const { add, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
