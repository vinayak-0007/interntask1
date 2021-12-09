import React from "react";
import styles from "./Form.css";
function Form() {
  return (
    <div>
      <h1>Create Account</h1>
      <form action="">
        <div class="row">
          <div class="col col-6">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div class="col col-6">
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
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
              placeholder="Password"
              aria-label="First name"
            />
          </div>
          <div class="col col-12">
            <input
              type="text"
              class="form-control"
              placeholder="Confirm Password"
              aria-label="First name"
            />
          </div>
            <button class="col col-12 btnX ">
            Create Account
            </button>
            <button class="col col-12 btnY"><i class="bi bi-facebook"></i>   Sign up with Facebook</button>
          <button class="col col-12 btnY"><i class="bi bi-google"></i>  Sign up with Google</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
