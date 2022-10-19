import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";

const Signup = () => {
  const [showpassword, setshowpassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const navigate = useNavigate();

  const handleemail = (e) => {
    setemail(e.target.value);
  };
  const handlname = (e) => {
    setname(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();


    try {
      const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name,
          });

          addDoc(collection(db, "users"), {
            name: name,
            email: email,
            timestamp: serverTimestamp(),
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });

        
    
    


        navigate("/");


    } catch (error) {
      console.log("sru");
      console.error(error);
    }
   


  };

  return (
    <div>
      <div className="pageContainer">
        <header>
          <p className="pageHeader"> Welocme Back</p>
        </header>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name || ""}
            onChange={handlname}
          />

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
            <p className="signInText">Sign Up</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="34" height="34" />
            </button>
          </div>
        </form>

        {/* Google auth */}

        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </div>
  );
};

export default Signup;
