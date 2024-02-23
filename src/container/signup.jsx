import React, { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = () => {
    console.log("Signing up with email:", email);
  };

  return (
    <div>
      <div className="bg-white rounded-full h-[75px]    ">
        <input
          className="w-96 h-12 mt-3 ml-4 bg-none  px-4 border-none focus:outline-none text-[#99694D] placeholder-[#99694D]  text-lg"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="bg-[#ED6312] w-28 h-12 rounded-lg mt-3 text-white font-bold text-xl mr-3"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
