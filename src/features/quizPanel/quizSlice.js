import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quizList: [],
    correctAnswerCount: undefined
  },
  reducers: {
    setQuiz: (state, action) => {
      return { ...state, quizList: action.payload };
    },
    setCorrectAnswerCount: (state, action) => {
      return { ...state, correctAnswerCount: action.payload };
    },
  }
});

//export reducer, actions,and state(selector)
export default quizSlice.reducer;
export const { setQuiz } = quizSlice.actions;
export const selectQuiz = (state) => state.quiz;
