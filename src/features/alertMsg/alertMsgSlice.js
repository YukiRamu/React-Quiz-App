import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: "",
  variant: "dark",
  show: false
};

export const alertMsgSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload.message;
      state.variant = action.payload.variant ? action.payload.variant : "dark";
      state.show = true;
    },
    hideAlert: (state) => {
      state.message = '';
      state.variant = "dark";
      state.show = false;
    }
  }
});

export const { showAlert, hideAlert } = alertMsgSlice.actions;
export const selectAlert = (state) => state.alert;
export default alertMsgSlice.reducer;