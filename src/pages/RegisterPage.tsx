
import RegisterBox from "../components/Register_Screen/Register_box";
import Logo_MusicBoxd from "../components/Login_Screen/Logo_MusicBoxd";
import Summary_Text from "../components/Login_Screen/SummaryText";
import styled from "styled-components";

const Container = styled.body`
  background-color: #515cd5;
  margin: 0px;
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

  return (
    <Container>
      <Logo_MusicBoxd />
      <Section>
        <Summary_Text />
        <RegisterBox />
        <MusicalGirl
          src="public\tela_login\GirlHearingMusic-Login-register.svg"
          alt="Girl hearing music"
        />
      </Section>
    </Container>
  );
}
