import { configureStore } from '@reduxjs/toolkit';
import authslice from './auth-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: {
    auth: authslice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
