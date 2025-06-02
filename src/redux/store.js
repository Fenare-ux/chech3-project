// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import likesReducer from './likesSlice';
import userReducer from './userSlice';
import orderReducer from './orderSlice'; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
    likes: likesReducer,
    user: userReducer,
    orders: orderReducer
  },
});

export default store;
