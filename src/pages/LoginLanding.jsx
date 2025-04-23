import { useNavigate } from "react-router";
import { useState } from "react";

function LoginLanding() {

const [forgot, setForgot] = useState("Forgot Password");  
const [loginMsg, setLoginMsg] = useState("You didn't enter a username or password!");  
const navigate = useNavigate();

const loginFunc = () => {
    if (document.getElementById("name").value === "" || document.getElementById("password").value === "") {
      alert("You didn't enter a username or password!");
    }
    else {alert("You logged in");}
}

  return (
    <body>
    <section> 
    <div className="signin">
      <div className="content">
        <h2>Sign In</h2>

        <div className="form">
          <div className="inputBox">
            <input type="text" id="name"/> <i>Username</i>
          </div>

          <div className="inputBox">
            <input type="password" id="password"/> <i>Password</i>
          </div>

          {/* <div className="links">
            <p onClick={setForgot("Thats Bad!")}>{forgot}</p>
          </div> */}

          <div className="inputBox">
            <input type="submit" value="Login" onClick={loginFunc}/>
          </div>

          <div className="links">
            <a href="/register">Dont have an account? Register!</a>
          </div>
        </div>
      </div>
    </div>
    </section> 
    </body>
   

  );
}

export default LoginLanding;
