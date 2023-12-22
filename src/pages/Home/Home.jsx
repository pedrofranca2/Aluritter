import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import validator from 'validator';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const ButtonStyled = styled.button`
  justify-content: center;
  background-color: #10b981;
  border-radius: 4px;
  font-size: 16px;
  height: 40px;
  align-items: center;
  line-height: 24px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #f1f5f9;
  margin-top: 20px;
  width: 100%;
`;

const InputStyled = styled.input`
  border-radius: 4px;
  border: 1px solid #94a3b8;
  height: 42px;
  padding: 8.5px 9px 14.5px 9px;
  margin-top: 15px;
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
  width: 378px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpanStyled = styled.span`
  color: red;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
`;

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <HomeContainer>
      <TitleStyled>Aluritter</TitleStyled>
      <FormStyled onSubmit={ handleSubmit(onSubmit) }>
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
          <SpanStyled>Campo obrigatório</SpanStyled>
        )}
        {errors?.login?.type === 'validate' && (
          <SpanStyled>Email inválido</SpanStyled>
        )}
        <InputStyled
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          { ...register('password', { required: true }) }
        />
        {errors?.password?.type === 'required' && (
          <SpanStyled>Campo obrigatório</SpanStyled>)}
        <ButtonStyled>
          Criar uma nova conta
        </ButtonStyled>
      </FormStyled>
      <TextStyled>
        Já possui um conta?
        {' '}
        <LinkStyled href="blank">Acesse agora!</LinkStyled>
      </TextStyled>
    </HomeContainer>
  );
}

export default Home;
