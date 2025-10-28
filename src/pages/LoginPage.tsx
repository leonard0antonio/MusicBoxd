import LoginBox from "../components/Login_Screen/Login_box";
import Logo_MusicBoxd from "../components/Login_Screen/Logo_MusicBoxd";
import Summary_Text from "../components/Login_Screen/SummaryText";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';

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

export default function LoginPage() {

    const location = useLocation()

    const registrationData = location.state?.registrationData  ?? {}

    const userRegisteredEmail = registrationData.email ?? ""
    const userRegisteredPassword = registrationData.password ?? ""

  return (
    <Container>
      <Logo_MusicBoxd />
      <Section>
        <Summary_Text />
        <LoginBox 
        password={userRegisteredPassword}
        email={userRegisteredEmail}
        />
        <MusicalGirl
          src="public\tela_login\GirlHearingMusic-Login-register.svg"
          alt="Girl hearing music"
        />
      </Section>
    </Container>
  );
}
