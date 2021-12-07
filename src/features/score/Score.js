import React from 'react';
import "./Score.scss";
import {
  Modal,
  Button
} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Score = (props) => {

  //router
  const navigate = useNavigate();

  const navigateTo = (location) => {
    if (location === "home") {
      navigate("/");
    } else {
      navigate("/answer");
    };
    props.onHide();
  };

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        className="scoreModal"
        onHide={props.onHide}
      >
        <Modal.Header>
          <Modal.Title as="h3" id="contained-modal-title-vcenter">
            Your Score
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="score">
           <span>{props.count}</span> / 10
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="toHomeBtn"
            type="button"
            onClick={() => navigateTo("home")}>Return to Home</Button>
          <Button
            className="toAnswerBtn"
            type="button"
            onClick={() => navigateTo("answer")}>Check correct answer</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default Score;
