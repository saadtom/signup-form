import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const updateFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setFormSubmitted(false);
  };

  const showSubmitMessage = () => {
    if (password !== confirmPassword) {
        return  <span className="password-match-error">Password and Confirm Password values does not match.</span>
    } else {
        return <span className="form-submitted ">Form Submitted</span>;
    }  
  }

  const submitForm = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const { userName, password, confirmPassword } = formData;

  return (
    <div className="form-card">
      <h2>User Sign Up Form</h2>
      <form onSubmit={submitForm}>
        <input
          value={userName}
          onChange={(e) => updateFormData(e)}
          placeholder="User Name"
          type="text"
          name="userName"
          required
        />
        <input
          value={password}
          onChange={(e) => updateFormData(e)}
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <input
          value={confirmPassword}
          onChange={(e) => updateFormData(e)}
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          required
        />
        {formSubmitted ? showSubmitMessage() : null}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
