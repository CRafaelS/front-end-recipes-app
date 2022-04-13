import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import userContext from '../../contexts/user';
import Input from '../Input';
import Form from './StyledComponents/Form';
import Header from './StyledComponents/Header';
import Logo from './StyledComponents/Logo';
import Welcome from './StyledComponents/Welcome';
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
      <Form onSubmit={ handleSubmit }>
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
        <Button
          variant="danger"
          size="lg"
          style={ {
            width: '50vw',
          } }
          type="submit"
          data-testid="login-submit-btn"
          disabled={ !isLoginValid }
        >
          Enter
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;
