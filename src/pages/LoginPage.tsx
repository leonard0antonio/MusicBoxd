
import LoginBox from '../components/Login_Screen/Login_box'
import Logo_MusicBoxd from '../components/Login_Screen/Logo_MusicBoxd'
import Summary_Text from '../components/Login_Screen/SummaryText'
import styled from "styled-components"

const Container = styled.body`
    background-color: #515CD5;
    margin: 0px;
`
const Section = styled.section`
        display: flex;
        max-width: 90%;
        position: relative;
        

        .MusicalGirl{
        object-fit: cover;
        object-position: -50% 2rem;
        position: absolute;
        top: 22rem; 
        left: 9rem;
        }
        

`

export default function LoginPage() {

    return (

                <Container>
                 
                   <Logo_MusicBoxd/>
                    <Section>
                   <Summary_Text/>
                <LoginBox/>
                <img className="MusicalGirl"
                 src="/GirlHearingMusic-Login-register.svg" 
                 alt="Girl hearing music" />
               </Section>
             
                </Container>
    
     
    )
}