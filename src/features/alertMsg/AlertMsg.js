import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAlert, hideAlert } from "./alertMsgSlice";
import Alert from "react-bootstrap/Alert";
import "./AlertMsg.scss";

const AlertMsg = () => {
  //redux
  const dispatch = useDispatch();
  const alert = useSelector(selectAlert);

  useEffect(() => {
    if (alert.show) {
      setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
    }
  }, [alert, dispatch]);

  return (
    <>
      <Alert variant={alert.variant} show={alert.show} className="bottom-center">
        {alert.message}
      </Alert>
    </>
  );
};

export default AlertMsg;