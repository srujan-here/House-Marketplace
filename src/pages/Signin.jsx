import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Signin = () => {
  const [showpassword, setshowpassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleemail = (e) => {
    setemail(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(userCredential.user){
      navigate('/')

    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

   
  };

  return (
    <div>
      <div className="pageContainer">
        <header>
          <p className="pageHeader"> Welocme Back</p>
        </header>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email || ""}
            onChange={handleemail}
          />

          <div className="passwordInputDiv">
            <input
              type={showpassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password || ""}
              onChange={handlepassword}
            />
            <img
              src={visibilityIcon}
              className="showPassword"
              onClick={() => setshowpassword((t) => !t)}
              alt="show password"
            />
          </div>

          <Link to="/forgot-Password" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="34" height="34" />
            </button>
          </div>
        </form>

        {/* Google auth */}

        <Link to="/sign-up" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </div>
  );
};

export default Signin;
