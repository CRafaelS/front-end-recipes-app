import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import userContext from '../contexts/user';
import LoginForm from '../Components/LoginForm';

function Login() {
  const { isLogged } = useContext(userContext);

  return (
    isLogged
      ? <Redirect to="/foods" />
      : <LoginForm />
  );
}

export default Login;
