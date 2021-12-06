import { configureStore } from '@reduxjs/toolkit';
import alertMsgReducer from "../features/alertMsg/alertMsgSlice";
import userInfoReducer from "../features/userForm/userSlice";
import categorySlice from '../features/userForm/categorySlice';
import quizSlice from '../features/quizPanel/quizSlice';

export const store = configureStore({
  reducer: {
    alert: alertMsgReducer,
    userInfo: userInfoReducer,
    category: categorySlice,
    quiz: quizSlice
  },
});
