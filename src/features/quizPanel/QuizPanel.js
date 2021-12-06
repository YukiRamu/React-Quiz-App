import React, { useEffect, useState } from 'react';
import "./QuizPanel.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCategory } from '../userForm/categorySlice';
import { selectQuiz, setQuiz } from './quizSlice';
import { showAlert } from "../alertMsg/alertMsgSlice";
import { Navigate } from 'react-router';

const QuizPanel = () => {

  //router
  const navigate = useNavigate();

  //redux
  const category = useSelector(selectCategory);
  const quiz = useSelector(selectQuiz);
  const dispatch = useDispatch();

  //private state
  const [answer, setAnswer] = useState([]);
  const [checked, setChecked] = useState({
    answer: "",
    isChecked: false
  });
  const [count, setCount] = useState();

  console.log(checked);

  //method
  const getCategoryId = async (topic) => {
    const targetTopic = category.categoryList.find(elem => elem.name === topic);
    return targetTopic.id;
  };

  //when the component is mounted get quiz data
  useEffect(async () => {
    try {
      const categoryId = await getCategoryId(category.topic);
      const response = await fetch(`https://opentdb.com/api.php?amount=10&type=boolean&category=${categoryId}`);
      if (!response.ok) {
        throw response.statusText;
      } else {
        //get data
        const quizData = await response.json();
        console.log(quizData.results.length);
        if (quizData.results.length === 0) {
          dispatch(showAlert({
            message: "Sorry no quiz list prepared :( Please select another topic",
            variant: "danger",
          }));
          //return to home
          navigate("/");
        } else {
          //dispatch quiz
          dispatch(setQuiz(quizData.results));
        }
      }
    } catch (error) {
      console.error(`Error: failed to fetch category data ${error}`);
    }
  }, []);

  const handleChange = (questionNum, input) => {
    checked === false && setChecked({
      answer: input,
      isChecked: true
    });
    setAnswer([...answer, {
      questionNum,
      input
    }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation check
    if (answer.length !== 10) {
      dispatch(showAlert({
        message: "Please answer all questions",
        variant: "danger",
      }));
      return false;
    } else {
      //check answer
      const answerArray = quiz.quizList.map(elem => elem.correct_answer);
      const inputArray = answer.map(elem => elem.input);
      let count = 0;
      for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] === inputArray[i]) {
          count++;
        }
      }
      setCount(count);
    }
  };

  return (
    <>
      <Container fluid classname="quizPanelContainer">
        {quiz.quizList.length !== 0 ? (
          <>
            <Row>
              {quiz.quizList.map((elem, index) => (
                <>
                  <Form
                    className="quizForm">
                    <p key={index}>{index + 1}: {elem.question}</p>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        value="True"
                        label="True"
                        checked={checked.answer === Option.value}
                        onChange={() => handleChange(index + 1, "True")} />
                      <Form.Check
                        type="radio"
                        value="False"
                        label="False"
                        checked={checked.answer === Option.value}
                        onChange={() => handleChange(index + 1, "False")} />
                    </Form.Group>
                  </Form>
                </>
              ))}
              <Button
                className="submitBtn"
                type="button"
                onClick={handleSubmit}>Submit Answer</Button>
              {/* display count */}
              {count !== undefined && <p>Your Score is : {count}/10</p>}
            </Row>
          </>
        ) :
          (<h3 className="loading">Loading...</h3>)}
      </Container>

    </>
  );
};

export default QuizPanel;
