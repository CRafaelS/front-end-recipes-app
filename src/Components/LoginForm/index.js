import React, { useContext } from 'react';
import userContext from '../../contexts/user';
import Input from '../Input';
import LoginFormContainer from './StyledsComponents/LoginFormContainer';

function LoginForm() {
  const {
    setEmail,
    setPassword,
    isLoginValid,
    login,
  } = useContext(userContext);

  const handleSubmit = (submit) => {
    submit.preventDefault();
    login();
  };

  return (
    <LoginFormContainer>
      <form onSubmit={ handleSubmit }>
        <Input
          name="email"
          type="email"
          testId="email-input"
          controller={ setEmail }
        />
        <Input
          name="senha"
          type="password"
          testId="password-input"
          controller={ setPassword }
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ !isLoginValid }
        >
          Enter
        </button>
      </form>
    </LoginFormContainer>
  );
}

export default LoginForm;
