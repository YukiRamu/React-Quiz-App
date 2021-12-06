import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import AlertMsg from './features/alertMsg/AlertMsg';
import Wrapper from './features/wrapper/Wrapper';
import Home from "./pages/home/Home";
import Quiz from './pages/quiz/Quiz';

const App = () => {
  return (
    <>
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Wrapper>
      </Router>
      <AlertMsg/>
    </>
  );
};

export default App;
