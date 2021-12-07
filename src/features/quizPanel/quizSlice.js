import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quizList: [],
    inputAnswer: []
  },
  reducers: {
    setQuiz: (state, action) => {
      return { ...state, quizList: action.payload };
    },
    setInputAnswer: (state,action) => {
      return { ...state, inputAnswer: action.payload };
    }
  }
});

//export reducer, actions,and state(selector)
export default quizSlice.reducer;
export const { setQuiz, setInputAnswer } = quizSlice.actions;
export const selectQuiz = (state) => state.quiz;
