import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return {
    title: "Sign Up",
    element: <SignUp />,
  };
};

export default SignUpPage;
