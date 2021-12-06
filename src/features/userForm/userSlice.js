import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
    username: ""
  },
  reducers: {
    setUserInfo: (state, action) => {
      return { ...state, username: action.payload };
    }
  }
});

//export reducer, actions,and state(selector)
export default userSlice.reducer;
export const { setUserInfo } = userSlice.actions;
export const userInfoSelector = (state) => state.userInfo;
