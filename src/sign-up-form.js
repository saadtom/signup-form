import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

    const { userName, password, confirmPassword } = formData;

  return (
    <div className="form-card">
      <form>
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
          name="userName"
          required
        />
        <input
          value={confirmPassword}
          onChange={(e) => updateFormData(e)}
          placeholder="Confirm Password"
          type="text"
          name="confirmPassword"
          required
        />
      </form>

      <button type="submit">Submit</button>
    </div>
  );
};

export default SignUpForm;
