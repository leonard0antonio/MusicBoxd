import Register2Box from "../components/Register_Screen/Register2_Screen/Register2_box";
import Logo_MusicBoxd from "../components/Login_Screen/Logo_MusicBoxd";
import Summary_Text from "../components/Login_Screen/SummaryText";
import styled from "styled-components";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: #515cd5;
  margin: 0px;

   min-height: 100vh; 
  width: 100%;
`;
const Section = styled.section`
  display: flex;
  max-width: 90%;
  position: relative;
`;
const MusicalGirl = styled.img`
  object-fit: cover;
  object-position: -50% 2rem;
  position: absolute;
  top: 22rem;
  left: 9rem;
`;



  

export default function Register2Page() {

    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const location = useLocation()
    const registrationData = location.state?.registrationData //recebe dados do state registrationData passado pelo handleSubmitPage1 (registerPage.tsx)

   const RegistrationData = {
    password,
    ...registrationData, 
  }


  const handleSubmitPage2 = () => {
  console.log(RegistrationData.email)

  
   navigate('/login', { state: { registrationData: RegistrationData } }); //passa os dados do cadastro para o componente de login
  }

  return (
    <Container>
      <Logo_MusicBoxd />
      <Section>
        <Summary_Text />
        <Register2Box
        password={password}
        setPassword={setPassword}
        onFormSubmit={handleSubmitPage2}
        />
        <MusicalGirl
          src="public\tela_login\GirlHearingMusic-Login-register.svg"
          alt="Girl hearing music"
        />
      </Section>
    </Container>
  );
}
