// redux/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: []
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload); // payload = array of cart items
    }
  }
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
