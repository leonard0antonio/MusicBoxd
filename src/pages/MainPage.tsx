import styled from "styled-components";
import ArtistCard from "../components/tela_principal/ArtistCard";
import MusicCard from "../components/tela_principal/MusicCard";
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
`;

export default function MainPage() {
  const artists = [
    "Adele",
    "The Weeknd",
    "Coldplay",
    "Dua Lipa",
    "Bad Bunny",
    "Billie Eilish",
  ];

  return (
    <Container>
      <Section>
        <h3>Em Alta</h3>
        <Row>
          {artists.map((a, i) => (
            <ArtistCard key={a} name={a} color={`hsl(${i * 40},60%,45%)`} />
          ))}
        </Row>
      </Section>

      <Section>
        <h3>Destaques</h3>
        <Row>
          <MusicCard title="Playlist do Dia" subtitle="Descobertas frescas" />
          <MusicCard title="Top Álbuns" subtitle="Mais tocados" />
          <MusicCard title="Novidades" subtitle="Lançamentos" />
        </Row>
      </Section>

      <Section>
        <h3>Comentários</h3>
        <div style={{ marginTop: 12 }}>
          <FeedCard
            user="Leonardo Silva"
            rating={5}
            color="#8b5cf6'"
            text={`Esse álbum mudou minha maneira de escutar música. Produção impecável e letras profundas.`}
          />
          <FeedCard
            user="Mariana Alves"
            rating={4}
            color="#06b6d4"
            text={`Adorei a seleção de faixas — perfeita para trabalhar concentrado.`}
          />
          <FeedCard
            user="Carlos M."
            rating={5}
            color="#f97316"
            text={`Recomendadíssimo!`}
          />
        </div>
      </Section>
    </Container>
  );
}
