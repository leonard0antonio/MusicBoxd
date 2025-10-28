
import RegisterBox from "../components/Register_Screen/Register_box";
import Logo_MusicBoxd from "../components/Login_Screen/Logo_MusicBoxd";
import Summary_Text from "../components/Login_Screen/SummaryText";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";

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
export default function RegisterPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  const RegistrationData = {
    name,
    email,
  }


  const handleSubmitPage1 = () => {
    navigate('/register/2', { state: {registrationData: RegistrationData }}); //passa os dados do cadastro para o componente de register2
  }

  return (
    <Container>
      <Logo_MusicBoxd />
      <Section>
        <Summary_Text />
        <RegisterBox
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          onFormSubmit={handleSubmitPage1}
        />
        <MusicalGirl
          src="public\tela_login\GirlHearingMusic-Login-register.svg"
          alt="Girl hearing music"
        />
      </Section>
    </Container>
  );
}
