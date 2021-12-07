import React from 'react';
import "./AnswerPanel.scss";
import {
  Container,
  Row,
  Button,
} from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectQuiz } from '../quizPanel/quizSlice';
import { BsCheck2, BsX, BsCheckLg, BsXLg } from "react-icons/bs";

const AnswerPanel = () => {

  //router
  const navigate = useNavigate();

  //redux
  const quiz = useSelector(selectQuiz);

  return (
    <>
      <Container fluid className="answerPanelContainer">
        <>
          <Row>
            <h2>Answer</h2>
            {quiz.quizList.map((elem, index) => (
              <div key={index}>
                <p>{index + 1}: {elem.question}</p>
                <div className="answer">
                  <p className="correctAnswer">{elem.correct_answer}</p>
                  <p className="inputAnswer">(Your Anwer is : {quiz.inputAnswer[index].answer})</p>
                  {elem.correct_answer === quiz.inputAnswer[index].answer ?
                    <BsCheckLg className="correct" /> :
                    <BsXLg className="wrong" />}
                </div>
              </div>
            ))}
            <Button
              className="toHomeBtn"
              type="button"
              onClick={() => navigate("/")}>Return to Home</Button>
          </Row>
        </>
      </Container>
    </>
  );
};

export default AnswerPanel;
