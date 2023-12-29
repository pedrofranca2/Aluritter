import styled from 'styled-components';
import { useState } from 'react';
import Header from '../../components/Header';
import { auth } from '../../services/firebaseConfig';

const ContainerSginStyled = styled.div`
  background-color: #f3f4f6;
  width: 100%;
  height: 100vh;
`;

const TitleStyled = styled.h1`
  color: #4b5563;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 50px;
`;

const ButtonStyled = styled.button`
  width: 66.49px;
  height: 40px;
  border-radius: 4px;
  padding: 8.5 7.49 7.5 8px;
  background-color: #0ea5e9;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
`;

const StyledTextarea = styled.textarea`
  width: 1200px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  resize: none;
  height: 114px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const TextStyled = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #16a34a;
`;

const FooterCardStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 0 20px;
margin-top: 10px;
`;

const EmailStyled = styled.h1`
font-size: 14px;
line-height: 20px;
font-weight: 400;
font-family: "Roboto", sans-serif;
color: #0ea5e9;
`;

const ContainerPostStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid #e5e7eb;
  width: 1200px;
  border-radius: 4px;
  margin: 0 auto;
  background-color: #ffffff;
  margin-top: 10px;
  padding: 10px; /* Adicionei padding para separar os elementos internos */
`;

const TextAlurriteStyled = styled.h1`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #6b7280;
  margin-left: 20px;
  `;

const ButtonIcon = styled.button`
  width: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
`;

function Home() {
  const maxLenght = 255;

  const [textArea, setTextArea] = useState('');
  const [saveText, setSavedText] = useState([]);

  const handleChange = (event) => {
    setTextArea(event.target.value);
  };

  const remainsCharacters = maxLenght - textArea.length;

  const handleDelete = (index) => {
    const updateTexts = saveText.filter((_, i) => i !== index);
    setSavedText(updateTexts);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (textArea === '') {
      return alert('Digite algo para aluritar');
    }
    setSavedText((prevWords) => [...prevWords, textArea]);
    setTextArea('');
  };
  console.log();
  return (
    <>
      <Header />
      <ContainerSginStyled>
        <StyledForm>
          <TitleStyled>Alurite agora mesmo...</TitleStyled>
          <StyledTextarea
            id="myTextarea"
            name="myTextarea"
            rows="4"
            maxLength="255"
            value={ textArea }
            onChange={ handleChange }
          />
          <ContainerStyled>
            <TextStyled>
              Você ainda pode digitar
              {' '}
              {remainsCharacters}
              {' '}
              caracteres
            </TextStyled>
            <ButtonStyled onClick={ handleClick }>aluritar</ButtonStyled>
          </ContainerStyled>
        </StyledForm>

        {saveText.map((text, index) => {
          return (
            <ContainerPostStyled key={ index }>
              <TextAlurriteStyled>{text}</TextAlurriteStyled>
              <FooterCardStyled>
                <EmailStyled>{auth.currentUser.email}</EmailStyled>
                <ButtonIcon onClick={ () => handleDelete(index) }>
                  <img src="/public/lixeira.png" alt="Icone de lixeira" />
                </ButtonIcon>
              </FooterCardStyled>
            </ContainerPostStyled>
          );
        })}
      </ContainerSginStyled>
    </>
  );
}

export default Home;
