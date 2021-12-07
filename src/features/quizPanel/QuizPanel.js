import React, { useEffect, useState } from 'react';
import "./QuizPanel.scss";
import {
  Container,
  Row,
  Button,
  Form
} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCategory } from '../userForm/categorySlice';
import { selectQuiz, setQuiz } from './quizSlice';
import { showAlert } from "../alertMsg/alertMsgSlice";
import Loading from '../loading/Loading';
import Score from '../score/Score';

const QuizPanel = () => {

  //router
  const navigate = useNavigate();

  //redux
  const category = useSelector(selectCategory);
  const quiz = useSelector(selectQuiz);
  const dispatch = useDispatch();

  //private state
  const [checked, setChecked] = useState([]);
  const [count, setCount] = useState();
  const [modalShow, setModalShow] = useState(false);

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
    //first time check answer
    if (checked.findIndex(e => e.questionNum === questionNum) === -1) {
      setChecked([...checked, {
        questionNum,
        answer: input,
        isChecked: true
      }]);
    } else {
      //change answer
      setChecked(checked.map(el => (el.questionNum === questionNum ? {
        questionNum,
        answer: input,
        isChecked: true
      } : el)));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation check
    if (checked.length !== 10) {
      dispatch(showAlert({
        message: "Please answer all questions",
        variant: "danger",
      }));
      return false;
    } else {
      //check answer
      const answerArray = quiz.quizList.map((elem, index) => ({
        questionNum: index + 1,
        correctAnswer: elem.correct_answer
      }));

      const inputArray = checked.sort((a, b) => (a.questionNum - b.questionNum));

      let count = 0;
      for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i].correctAnswer === inputArray[i].answer) {
          count++;
        }
      }
      setCount(count);
      //show score modal
      setModalShow(true);
    }
  };

  return (
    <>
      <Container fluid className="quizPanelContainer">
        {quiz.quizList.length !== 0 ? (
          <>
            <Row>
              {quiz.quizList.map((elem, index) => (
                <>
                  <Form
                    className="quizForm">
                    <p key={index}>{index + 1}: {elem.question}</p>
                    <Form.Group className="checkBox">
                      <Form.Check
                        type="radio"
                        value="True"
                        label="True"
                        checked={checked.findIndex(e => e.questionNum === index + 1) !== -1 && checked[checked.findIndex(e => e.questionNum === index + 1)].isChecked === true && checked[checked.findIndex(e => e.questionNum === index + 1)].answer === "True"}

                        onChange={() => handleChange(index + 1, "True")} />
                      <Form.Check
                        type="radio"
                        value="False"
                        label="False"
                        checked={checked.findIndex(e => e.questionNum === index + 1) !== -1 && checked[checked.findIndex(e => e.questionNum === index + 1)].isChecked === true && checked[checked.findIndex(e => e.questionNum === index + 1)].answer === "False"}
                        onChange={() => handleChange(index + 1, "False")} />
                    </Form.Group>
                  </Form>
                </>
              ))}
              <Button
                className="submitBtn"
                type="button"
                onClick={handleSubmit}>Submit Answer</Button>
            </Row>
            {/* Score modal */}
            {count !== undefined && (
              <Score
                show={modalShow}
                onHide={() => setModalShow(false)}
                count={count} />
            )}
          </>
        ) :
          (<Loading />)}
      </Container>
    </>
  );
};

export default QuizPanel;
