 import styled from "styled-components"

 const Container = styled.div`
 
  display: grid;
  gap: 105px;
  
 `

 const Logo = styled.div`
    display:flex;
    margin:6rem 0rem 6rem 10rem;
    gap: 10px;
    align-items: center;


  img {
    width: 80px;
    height: 80px;
  }

  span {
    font-size: 40px;
    font-weight: bold;
    color: #fff;

    span {
      color: #f1c40f;
    }
  }
`;



 
 
 export default function Logo_MusicBoxd(){

    return(
            <Container>
                    <Logo>
                        <img src="./musicboxdLogo.svg" alt="Logo" />
                         <span>Music<span>Boxd</span>
                            </span>
                     </Logo>
                   
                    
            </Container>
    )
 }