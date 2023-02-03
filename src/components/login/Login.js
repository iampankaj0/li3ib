import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bottombar from "../../reusable/Bottombar";
import CustomInput from "../../reusable/CustomInput";
import { ArrowSVG, LogoSVG } from "../../reusable/icons";
import Sidebar from "../../reusable/Sidebar";
import "../../styles/scss/login.scss";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  console.log(loginData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <div className="login__main__div">
      <Sidebar />
      <div className="form__section">
        <CustomInput
          icon={<LogoSVG />}
          title={`email`}
          placeholder={`Enter Email Address`}
          arrowIcon={<ArrowSVG />}
          type={`email`}
          name={`email`}
          value={loginData.email}
          onChange={handleInputChange}
        />
        <CustomInput
          icon={<LogoSVG />}
          title={`TITLE`}
          placeholder={`Enter Password`}
          arrowIcon={<ArrowSVG />}
          type={`password`}
          name={`password`}
          value={loginData.password}
          onChange={handleInputChange}
        />
        <div className="forgot__password__link">
          <Link to="/">Forgot Password</Link>
        </div>

        <button className="login__submit__btn">log in</button>
        <div className="signup__redirect">
          <p>Don't have an account?</p>
          <Link to="/">Create A New Account</Link>
        </div>
      </div>
      <Bottombar />
    </div>
  );
};

export default Login;
