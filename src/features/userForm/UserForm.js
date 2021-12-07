import React, { useState, useEffect } from 'react';
import "./UserForm.scss";
import {
  Container,
  Form,
  Button,
} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from './userSlice';
import { showAlert } from "../alertMsg/alertMsgSlice";
import { setCategory, selectCategory, setTopic } from './categorySlice';

const UserForm = () => {

  //router
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);

  //private state
  const [userName, setUserName] = useState("");
  const [option, setOption] = useState("");

  //method
  //when the component is mounted
  useEffect(async () => {
    try {
      const response = await fetch("https://opentdb.com/api_category.php");
      if (!response.ok) {
        throw response.statusText;
      } else {
        //get data
        const categoryList = await response.json();
        //dispatch to reducer
        dispatch(setCategory(categoryList.trivia_categories));
      }
    } catch (error) {
      console.error(`Error: failed to fetch category data ${error}`);
    }
  }, []);

  //when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    //validation check
    if (userName === "" || option === "") {
      dispatch(showAlert({
        message: "Please enter your user name and choose topic",
        variant: "danger",
      }));
      return false;
    } else {
      //dispatch username
      dispatch(setUserInfo(userName));
      //dispatch topic
      dispatch(setTopic(option));
      //navigate to login
      navigate("/quiz");
    }
  };

  return (
    <>
      <Container fluid className="userFormContainer">
        <h1>Welcome to Quiz App :)</h1>
        <p>Enter your name and let't begin</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="userForm" >
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name..."
              value={userName}
              onFocus={() => setUserName("")}
              onChange={(e) => setUserName(e.target.value)} />
          </Form.Group>
          <Form.Group className="transactionCategory">
            <Form.Label>Topic:</Form.Label>
            <Form.Select
              required
              defaultValue="Choose a topic..."
              value={option}
              onChange={(e) => setOption(e.target.value)}>
              <option>Choose...</option>
              {category.categoryList.map((elem, index) => (
                <option key={index}>{elem.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button
            className="startBtn"
            type="submit">Start</Button>
        </Form>
      </Container>
    </>
  );
};

export default UserForm;
