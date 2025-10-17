import Register2Box from "../components/Register_Screen/Register2_Screen/Register2_box";
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
export default function Register2Page() {
  return (
    <Container>
      <Logo_MusicBoxd />
      <Section>
        <Summary_Text />
        <Register2Box />
        <MusicalGirl
          src="public\tela_login\GirlHearingMusic-Login-register.svg"
          alt="Girl hearing music"
        />
      </Section>
    </Container>
  );
}
