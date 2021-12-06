import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import alertMsgReducer from "../features/alertMsg/alertMsgSlice";
import userInfoReducer from "../features/userForm/userSlice";
import categorySlice from '../features/userForm/categorySlice';
import quizSlice from '../features/quizPanel/quizSlice';

export const store = configureStore({
  reducer: {
    alert: alertMsgReducer,
    userInfo: userInfoReducer,
    counter: counterReducer,
    category: categorySlice,
    quiz: quizSlice
  },
});
