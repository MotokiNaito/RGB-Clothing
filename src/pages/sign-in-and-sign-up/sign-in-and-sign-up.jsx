import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./sign-in-and-sign-up.scss";

const SignInSignUpPage = () => (
  <div className="sign-in-and-sing-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
