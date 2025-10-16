import styled from "styled-components";

const SummaryText = styled.div`
  padding: 0rem 0rem 0em 7rem;

  h3 {
    font-size: 2.5rem;

    max-width: 18rem;
  }
`;
const Summary = styled.span`
    font-size: 30px;
    display: flex;
    padding-bottom: 0px;
    max-width: 40.87rem;
    color: #bfc0c5;
  
`;

export default function Summary_Text() {
  return (
    <SummaryText>
      <h3>Bem-vindo(a) ao Music boxd</h3>
      <Summary>
        Descubra, organize, avalie e compartilhe seus <br /> álbuns e artistas
        favoritos. Explore o que os outros estão ouvindo e conecte-se com
        amantes de música.
      </Summary>
    </SummaryText>
  );
}
