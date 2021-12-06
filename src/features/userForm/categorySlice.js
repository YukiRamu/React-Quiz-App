import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categoryList: [],
    topic: {}
  },
  reducers: {
    setCategory: (state, action) => {
      return { ...state, categoryList: action.payload };
    },
    setTopic: (state, action) => {
      return { ...state, topic: action.payload };
    }
  }
});

//export reducer, actions,and state(selector)
export default categorySlice.reducer;
export const { setCategory, setTopic } = categorySlice.actions;
export const selectCategory = (state) => state.category;
