import React from 'react';
import "./Login.css";
import { Modal, Button } from "react-bootstrap";
import formImage from "../../Images/formLogin.png";
import Form from "../Form/Form";
function Login(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="myModal"
    >
      <Modal.Header closeButton>
          <p class="headerPara">Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼</p>
      </Modal.Header>
      <Modal.Body dialogClassName="modalBody">
        <div className="bodyleft">
          <Form />
        </div>
        <div className="bodyright">
          <p>Already have an account?<button class="btnSpan" onClick={props.setHandler} ><span  >Sign in !</span></button></p>
          <img src={formImage} alt="..." />
          <p>
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
