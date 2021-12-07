import React, { useState } from 'react';
import "./Score.scss";
import {
  Modal,
  Button
} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Score = (props) => {

  //router
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
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
            {props.count} / 10
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="submitBtn"
            type="button"
            onClick={navigateHome}>Return to Home</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default Score;
