import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import  "./Form2.css";
function Form2(props) {
  return (
    <div>
      <h1>Sign In</h1>
      <form action="">
        <div class="row">
          <div class="col col-12">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              aria-label="First name"
            />
          </div>
          <div class="col col-12">
            <input
              type="text"
              class="form-control"
              placeholder="password"
              aria-label="Last name"
            />
          </div>
            <button onClick={props.signInButton} class="col col-12 btnX ">
            Sign In
            </button>
            <button class="col col-12 btnY"><i class="bi bi-facebook"></i>  Sign up with Facebook</button>
          <button class="col col-12 btnY"><i class="bi bi-google"></i> Sign up with Google</button>
        </div>
      </form>
      <p>Forgot Password?</p>
    </div>
  );
}

export default Form2;
