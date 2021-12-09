import React,{useState} from "react";
import Front from "./Component/UI/Front";
import Header from "./Component/UI/Header";
import Navbar from "./Component/UI/Navbar";
import "./App.css";
import Card from "./Component/Card/Card";
import Login from "./Component/UI/Login";
import SignIn from "./Component/UI/SignIn";


const App = () => {
  const [ loginShow, setloginShow ] = useState( false );
  const [ signinShow, setsigninShow ] = useState( false );
  const [ signedIn, setsignedIn ] = useState( null );
  
  return (
    <React.Fragment>
      <Login
        show={loginShow}
        onHide={() => setloginShow( false )}
        setHandler={() => {
          setsigninShow( true );
          setloginShow( false );
        }}
      />
      <SignIn
        show={signinShow}
        onHide={() => setsigninShow( false )}
        setSignHandler={()=>{ setsigninShow( false );
          setloginShow( true );
        }}
        signedInHandler={() => {
          setsigninShow( false );
        }}
      
      />
      <Header  />
      <Front />
      <div className="body2">
        <Navbar joinGroup={() => setloginShow(true)} />
        <div class="row">
          <div class="col-8">
            <Card />
          </div>
          <div class="col-4">
            <div className="top">
              <div className="top_left">
                <a href="">
                  <i class="bi bi-geo-alt" />{" "}
                </a>
                <p>Noida, India</p>
              </div>
              <i class="bi bi-pencil-fill"></i>
            </div>
            <div className="bottom">
              <i class="bi bi-exclamation-circle"></i>
              <p>
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
