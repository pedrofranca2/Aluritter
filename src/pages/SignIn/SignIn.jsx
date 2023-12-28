import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ButtonStyled } from '../../components/ButtonStyled';
import { InputStyled } from '../../components/InputStyled';
import { auth } from '../../services/firebaseConfig';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const TextStyled = styled.p`
  color: #6b7280;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  margin-top: 3px;
`;

const TitleStyled = styled.h1`
  font-size: 28px;
  line-height: 36px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #0ea5e9;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 378px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

function SignIn() {
  const [authError, setAuthError] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = ({ login, password }) => {
    setAuthenticating(true);
    signInWithEmailAndPassword(auth, login, password)
      .then((credential) => {
        localStorage.setItem('access-token', credential.user.accessToken);
        navigate('/');
      })
      .catch((error) => {
        console.error(error.message);
        setAuthError(true);
      })
      .finally(() => setAuthenticating(false));
  };

  return (
    <HomeContainer>
      <TitleStyled>Aluritter</TitleStyled>
      <FormStyled>
        <InputStyled
          type="text"
          id="login"
          name="login"
          placeholder="email@exemplo.com"
          className={ errors?.login && 'input-error' }
          { ...register('login', {
            required: true,
            validate: (value) => validator.isEmail(value),
          }) }
        />
        {errors?.login?.type === 'required' && (
          <span className="text-xs text-red-500 pl-1">Email é obrigatório</span>
        )}
        {errors?.login?.type === 'validate' && (
          <span className="text-xs text-red-500 pl-1">E-mail inválido</span>
        )}
        <InputStyled
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          { ...register('password', {
            required: true,
            minLength: 6,
            maxLength: 10,
          }) }
        />
        {errors?.password?.type === 'required' && (
          <span className="text-xs text-red-500 pl-1">Senha é obrigatória</span>
        )}
        {errors?.password?.type === 'minLength' && (
          <span className="text-xs text-red-500 pl-1">
            Senha precisa ter entre 8 e 16 caracteres
          </span>
        )}
        {errors?.password?.type === 'maxLength' && (
          <span className="text-xs text-red-500 pl-1">
            Senha precisa ter entre 8 e 16 caracteres
          </span>
        )}
        {authError ? (
          <p className="text-xs text-red-500 text-center mt-3">
            Email ou senha inválidos
          </p>
        ) : null}

        <ButtonStyled onClick={ handleSubmit(onSubmit) } disabled={ authenticating }>
          Acessar plataforma
        </ButtonStyled>
      </FormStyled>
      <TextStyled>
        Não possui uma conta?
        {' '}
        <Link
          to="/signup"
          style={ {
            color: '#0ea5e9',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 400,
            fontFamily: 'Roboto, sans-serif',
          } }
        >
          Crie uma agora!
        </Link>
      </TextStyled>
    </HomeContainer>
  );
}

export default SignIn;
