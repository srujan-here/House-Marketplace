import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

const Signin = () => {
  const [showpassword, setshowpassword] = useState(false);
  const [formdata, setformdata] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const { email, password } = formdata;
  const navigate = useNavigate();

  const onchange = () => {};

  return (
    <div>
      <div className="pageContainer">
        <header>
          <p className="pageHeader"> Welocme Back</p>
        </header>
        <form>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={() => onchange()}
          />

          <div className="passwordInputDiv">
            <input
              type={showpassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={() => onchange()}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
