// redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null, // { ad, soyad, email, unvan, kartNomresi }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Həm login, həm də signup üçün istifadə olunur
    setUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },

    loadUserFromStorage: (state) => {
      const storedUser = localStorage.getItem('userInfo');
      if (storedUser) {
        state.userInfo = JSON.parse(storedUser);
      }
    },

    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    }
  }
});

export const { setUser, loadUserFromStorage, logout } = userSlice.actions;

export default userSlice.reducer;
