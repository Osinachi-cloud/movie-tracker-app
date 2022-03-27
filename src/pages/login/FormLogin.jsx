import React, { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import API from '../../utils/API';

import  Form  from '../../components/form/Form';
import {Context} from '../../stateContext/StateProvider';

const FormLogin =()=> {
    const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [_user, setUser] = useContext(Context);

  const isInvalid = password === '' || username === '';

  

  const handleSignin = async (event) => {
    event.preventDefault();
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      console.log(requestToken);
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
      console.log(sessionId);
      console.log("submited")
      setUser({ sessionId: sessionId.session_id, username });
      console.log("submitedness")
      navigate('/');
    } catch (error) {
      setError(true);
    }


  };

  const handleInput = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;



    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return (

    
        <Form>
            
     
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Enter Username"
              value={username}
              type='text'
              name='username'
              onChange={handleInput}
            //   onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
            //   onChange={handleInput}

              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in"  >
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
                <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
  );
}

export default FormLogin