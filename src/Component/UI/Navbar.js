import React from "react";
import "./Navbar.css";
import { BsFillCaretDownFill } from "react-icons/bs";
function Navbar(props) {
  return (
    <div className="navbarMain">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          All posts(32)
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="#">
                 Article
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                 Events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Educations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                 Job
                </a>
              </li>
            </ul>
            <button class="postButton" >
            write a post
              <BsFillCaretDownFill/>
              </button>
            <button class="joinButton"  onClick={props.joinGroup}>
            <i class="bi bi-person-plus-fill"></i>
               join group
              </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
