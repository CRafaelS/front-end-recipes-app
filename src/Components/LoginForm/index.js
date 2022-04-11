import React, { useContext } from 'react';
import userContext from '../../contexts/user';
import Input from '../Input';
import Header from './StyledComponents/Header';
import Logo from './StyledComponents/Logo';
import Welcome from './StyledComponents/Welcome';
import LoginFormContainer from './StyledComponents/LoginFormContainer';
import logo from '../../images/logo_uaiQFome.avif';

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
    <>
      <Header>
        <Logo src={ logo } alt="logo" />
        <Welcome>Seja bem-vindo</Welcome>
      </Header>
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
    </>
  );
}

export default LoginForm;
