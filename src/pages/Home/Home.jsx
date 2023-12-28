import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { selectUser } from '../../redux/userSlice';

const ContainerSginStyled = styled.div`
  background-color: #F3F4F6;
  width: 100%;
  height: 100vh;
`;

const TitleStyled = styled.h1`
color: #4B5563;
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
background-color: #0EA5E9;
font-family: "Roboto", sans-serif;
color: #FFFFFF;
font-size: 16px;
line-height: 24px;
`;

const StyledTextarea = styled.textarea`
  width: 1200px;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  resize: none;
  height: 114px;
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
  color: #16A34A;
`;

const ContainerPostStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid #E5E7EB;
width: 1200px;
border-radius: 4px;
height: 98px;
margin: 0 auto;
background-color: #FFFFFF;
margin-top: 25px;
`;

const TextAlurriteStyled = styled.h1`
font-size: 16px;
line-height: 24px;
font-weight: 400;
font-family: "Roboto", sans-serif;
color: #6B7280;
margin-left: 20px;
margin-top: 20px;
`;

const EmailStyled = styled.h1`
font-size: 14px;
line-height: 20px;
font-weight: 400;
font-family: "Roboto", sans-serif;
color: #0EA5E9;
margin-left: 20px;
margin-bottom: 10px;
`;

function Home() {
  const maxLenght = 255;

  const user = useSelector(selectUser);

  const [textArea, setTextArea] = useState('');
  const [saveText, setSavedText] = useState([]);

  const handleChange = (event) => {
    setTextArea(event.target.value);
  };

  const remainsCharacters = maxLenght - textArea.length;

  const handleClick = (event) => {
    event.preventDefault();
    if (textArea === '') {
      return alert('Digite algo para aluritar');
    }
    setSavedText((prevWords) => [...prevWords, textArea]);
    setTextArea('');
  };

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

        {saveText.map((test, index) => {
          return (
            <ContainerPostStyled key={ index }>
              <TextAlurriteStyled>{test}</TextAlurriteStyled>
              <EmailStyled>{user.userData.login}</EmailStyled>
            </ContainerPostStyled>
          );
        })}

      </ContainerSginStyled>
    </>
  );
}

export default Home;
