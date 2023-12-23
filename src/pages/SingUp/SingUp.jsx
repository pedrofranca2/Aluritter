import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { ButtonStyled } from '../../components/ButtonStyled';
import { InputStyled } from '../../components/InputStyled';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const LinkStyled = styled.a`
  color: #0ea5e9;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
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

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <HomeContainer>
      <TitleStyled>Aluritter</TitleStyled>
      <FormStyled onSubmit={ handleSubmit() }>
        <InputStyled
          type="text"
          id="login"
          name="login"
          placeholder="email@exemplo.com"
          className={ errors?.login && 'input-error' }
          { ...register('login', {
            required: true,
            validate: (value) => validator.isEmail(value) }) }
        />
        {errors?.login?.type === 'required' && (
          <span className="text-xs text-red-500 pl-1">
            Email é obrigatório
          </span>
        )}
        {errors?.login?.type === 'validate' && (
          <span className="text-xs text-red-500 pl-1">
            E-mail inválido
          </span>
        )}
        <InputStyled
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          { ...register('password', { required: true, minLength: 6, maxLength: 10 }) }
        />
        {errors?.password?.type === 'required' && (
          <span className="text-xs text-red-500 pl-1">
            Senha é obrigatória
          </span>
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

        <ButtonStyled>
          Acessar plataforma
        </ButtonStyled>
      </FormStyled>
      <TextStyled>
        Não possui um conta?
        {' '}
        <LinkStyled href="blank"><Link to="/">Crie uma agora!</Link></LinkStyled>
      </TextStyled>
    </HomeContainer>
  );
}

export default Home;
