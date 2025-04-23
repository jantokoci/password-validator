import { useNavigate } from "react-router";
import { useState } from "react";
import validator from "validator";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function RegisterLanding() {

  const navigate = useNavigate();
 
    const [errorMessage, setErrorMessage] = useState("");
    const [canSee, setCanSee] = useState(false);
    const [randomPassword, setRandomPassword] = useState("");
    const [passwordNeed, setPasswordNeed] = useState(false);
  
  
    const validate = (value) => { //I want to make it easy to change the password criterium, from the app.jsx i need to pass the    criteruim to this function
      if (
        validator.isStrongPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 2,
          minNumbers: 3,
          minSymbols: 1,
        })
      ) {
        setErrorMessage("Is Strong Password");
      } else {
        setErrorMessage("Is not Strong Password");
      }
    };
  
    const letMeSee = () => {
      setCanSee(!canSee);
    };
  
    const giveMePassword = () => {
      handleRandomPassword();
    }
  
    const handleRandomPassword = () => {
      let eredmeny = "";
      const bigChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const smallChar = "abcdefghijklmnopqrstuvwxyz";
      const numb = "0123456789";
      const symbol = "-.,?:;";
  
      let counter = 0;
  
      while (counter < 3) {
        eredmeny += numb.charAt(Math.floor(Math.random() * numb.length));
        counter += 1;
      }
      while (counter < 8) {
        eredmeny += smallChar.charAt(
          Math.floor(Math.random() * smallChar.length)
        );
        counter += 1;
      }
      while (counter < 9) {
        eredmeny += symbol.charAt(Math.floor(Math.random() * symbol.length));
        counter += 1;
      }
      while (counter < 11) {
        eredmeny += bigChar.charAt(Math.floor(Math.random() * bigChar.length));
        counter += 1;
      }
    const chars = eredmeny.split("");
    chars.sort(() => 0.5 - Math.random());
    const scrambled = chars.join("");
      setRandomPassword(scrambled);
      setPasswordNeed(true);
      setErrorMessage("Is Strong Password");
    };

    const registerFunc = () => {
        if (document.getElementById("name").value === "" || document.getElementById("email").value === "") {
          alert("You didn't enter a something!");
        }
        else if (errorMessage == "Is not Strong Password" || errorMessage == "") { 
          alert("Your password is not strong enough!");
        }
        else {alert("You registered");}
    }

  return (
<body>
    <section> 
    <div className="signin">
      <div className="content">
        <h2>Sign up</h2>

        <div className="form">
          <div className="inputBox">
            <input type="email" id="email"/> <i>Email</i>
          </div>

          <div className="inputBox">
            <input type="username" id="name" /> <i>Username</i>
          </div>

          <div className="inputBox">
            <input id="password" type={canSee ? "text" : "password"}
        onChange={(e) => {validate(e.target.value); setPasswordNeed(false)}}
        value={passwordNeed ? randomPassword : null} /> <i>Password</i>
          </div>

          <div className="links">
        <a onClick={letMeSee}>{canSee ? <><FaEyeSlash /><a className="idk">Hide password</a></> : <><FaEye /><a className="idk">View password</a></>}</a>
        </div>
          

        {errorMessage == "Is Strong Password" ? 
            (<div className="link1">
            <a>{errorMessage}</a></div>)
            : (<div className="link2">
            <a>{errorMessage}</a></div>)}



          <div className="links">
            <a onClick={giveMePassword}>Give me strong a password!</a>
          </div>


          <div className="inputBox">
            <input type="submit" value="Register" onClick={registerFunc}/>
          </div>

          <div className="links">
            <a href="/">Back to Login</a>
          </div>
        </div>
      </div>
    </div>
    </section> 
    </body>
  );
}

export default RegisterLanding;
