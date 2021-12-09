import React from 'react';
import { Modal, Button } from "react-bootstrap";
import formImage from "../../Images/formLogin.png";
import Form2 from "../Form/Form2";
import "./Login.css";

function SignIn(props) {
  return (
    <div>
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
          <Form2 signInButton={props.signedInHandler} />
        </div>
        <div className="bodyright">
          <p>Don’t have an account yet? <button class="btnSpan"  onClick={props.setSignHandler} ><span >Create new for free!</span></button></p>
          <img src={formImage} alt="..." />
        </div>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default SignIn
