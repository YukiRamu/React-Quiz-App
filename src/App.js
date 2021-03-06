import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import AlertMsg from './features/alertMsg/AlertMsg';
import Wrapper from './features/wrapper/Wrapper';
import Home from "./pages/home/Home";
import Quiz from './pages/quiz/Quiz';
import Answer from "./pages/answer/Answer"

const App = () => {
  return (
    <>
      <Router>
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/answer" element={<Answer />} />
          </Routes>
        </Wrapper>
      </Router>
      <AlertMsg />
    </>
  );
};

export default App;
