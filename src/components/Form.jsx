import React, { useState } from "react";
import UserInput from "./UserInput";
import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNumber, setIsNumber] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmail(true);
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d{0,10}$/.test(inputValue)) {
      setPhoneNumber(inputValue);
      setIsNumber(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isNumber && !isEmail) {
      alert("Please enter either or both");
    }
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);

    // Clearing the input fields and resetting the alert box for both empty email and phone number
    setEmail("");
    setIsEmail(false);
    setPhoneNumber("");
    setIsNumber(false);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2 className="form-title">User Input Form</h2>
        <form onSubmit={handleSubmit}>
          <UserInput
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required={isEmail}
          />
          <UserInput
            label="Phone Number"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required={isNumber}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
