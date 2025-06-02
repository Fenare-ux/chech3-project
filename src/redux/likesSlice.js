// redux/likesSlice.js
import { createSlice } from '@reduxjs/toolkit';

// LocalStorage-dan ilkin məlumatı al
const savedLikes = JSON.parse(localStorage.getItem('likedItems')) || [];

const likesSlice = createSlice({
  name: 'likes',
  initialState: {
    items: savedLikes,
  },
  reducers: {
    toggleLike: (state, action) => {
      const id = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter(itemId => itemId !== id);
      } else {
        state.items.push(id);
      }
      // LocalStorage-a yaz
      localStorage.setItem('likedItems', JSON.stringify(state.items));
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
