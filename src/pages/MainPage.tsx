import styled from "styled-components";
import ArtistCard from "../components/tela_principal/ArtistCard";
import FeedCard from "../components/tela_principal/FeedCard";

const Container = styled.main`
  max-width: 1100px;
  margin: 24px auto;
  padding: 20px;
`;
const Section = styled.section`
  margin-top: 18px;
`;
const Row = styled.div`
  display: flex;
  gap: 16px;
  overflow: auto;
  padding: 10px 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function MainPage() {
  const artists = [
    {
      album: "Máquina do tempo",
      artist: "Matuê",
      cover: "https://i.ytimg.com/vi/9yjvDGE54SE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gIigkMA8=&rs=AOn4CLBV7EHsSmlluSRirgcurSU5HR4XiA",
    },
    {
      album: "333",
      artist: "Matuê",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVJfDa9wKQIYt-ljbnhNUF-DB-jmrMs6fzWyIRMnp--h08OCRhS57&usqp=CAE&s",
    },
    {
      album: "Celebridade",
      artist: "Orochi",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjlqoQtV79TlJtlaASqze-9yh3CDORMBBtmqGMF1XtY7loCy6RyXq&usqp=CAE&s",
    },
    {
      album: "Lobo",
      artist: "Orochi",
      cover: "https://i1.sndcdn.com/artworks-NthT8yTttLJDVriZ-Y13dOA-t500x500.jpg",
    },
    {
      album: "Prédios Deluxe",
      artist: "Veigh",
      cover: "https://i.scdn.co/image/ab67616d0000b273ce0947b85c30490447dbbd91",
    },
    {
      album: "Rodeo",
      artist: "Travis Scott",
      cover: "https://i.scdn.co/image/ab67616d0000b2736cfd9a7353f98f5165ea6160",
    },
  ];

  return (
    <Container>
      <Section>
        <h3>Em Alta</h3>
        <Row>
          {artists.map((a) => (
            <ArtistCard
              key={a.album}
              album={a.album}
              artist={a.artist}
              cover={a.cover}
            />
          ))}
        </Row>
      </Section>

      <Section>
        <h3>Comentários</h3>
        <div style={{ marginTop: 12 }}>
          <FeedCard
            user="Leonardo Silva"
            rating={5}
            color="#8b5cf6"
            text="Esse álbum mudou minha maneira de escutar música. Produção impecável e letras profundas."
          />
          <FeedCard
            user="Mariana Alves"
            rating={4}
            color="#06b6d4"
            text="Adorei a seleção de faixas — perfeita para trabalhar concentrado."
          />
          <FeedCard
            user="Carlos M."
            rating={5}
            color="#f97316"
            text="Recomendadíssimo!"
          />
        </div>
      </Section>
    </Container>
  );
}
