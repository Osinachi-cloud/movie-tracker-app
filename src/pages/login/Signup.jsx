import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import  Form  from '../../components/form/Form';


const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSignup = (event) => {
    event.preventDefault();
  };

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  return (

      <>
          <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

            <Form.Base onSubmit={handleSignup} method="POST">
              <Form.Input
                placeholder="First name"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              />
              <Form.Input
                placeholder="Email address"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              <Form.Input
                type="password"
                value={password}
                autoComplete="off"
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Submit
                disabled={isInvalid}
                type="submit"
                data-testid="sign-up"
              >
                Sign Up
              </Form.Submit>
            </Form.Base>

            <Form.Text>
              Already a user? <Form.Link to="/login">Sign in now.</Form.Link>
            </Form.Text>
       
          </Form>

      </>
  
  );
};

export default Signup;
