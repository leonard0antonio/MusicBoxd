import styled from "styled-components";
import ArtistCard from "../components/tela_principal/ArtistCard";
import StoriesBar from "../components/tela_principal/StoriesBar";
import {
  Play,
  Heart,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Share2,
} from "lucide-react";
import { useRef } from "react";

const Container = styled.main`
  max-width: 800px; /* ⬅ limite horizontal */
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-top: 20px;
  position: relative;

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    color: #fff;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 18px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrap = styled.article`
  background: #1b1d2a;
  border-radius: 16px;
  padding: 18px;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;
  transition: transform 0.2s ease;
  width: 100%;
  max-width: 720px; /* ⬅ largura controlada */

  &:hover {
    transform: scale(1.01);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  span:first-child {
    font-weight: 600;
  }

  span:last-child {
    color: #aaa;
    font-size: 13px;
  }
`;

interface SongBoxProps {
  bgColor?: string;
}


const SongBox = styled.div<SongBoxProps>`
  display: flex;
  align-items: center;
  gap: 12px; /* espaço entre a imagem e o texto */
  padding: 8px 12px;
  background: ${props => props.bgColor || "#1e1e1e"};
  border-radius: 8px;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 14px;
    font-weight: 700;
    margin: 0;
  }

  span {
    font-size: 12px;
    color: #e0e0e0;
  }
`;

const SongImage = styled.img`
  width: 40px; /* tamanho fixo da imagem */
  height: 40px;
  border-radius: 4px;
  object-fit: cover; /* mantém proporção e corta o excesso */
`;

const Rating = styled.div`
  color: #facc15;
  font-size: 16px;
  margin-bottom: 6px;
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

const Text = styled.p`
  color: #d3d6df;
  line-height: 1.5;
  margin-bottom: 16px;
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 10px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #ccc;
  font-size: 13px;
`;

const ArrowButton = styled.button<{ right?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.right ? "right: 0" : "left: 0")};
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export default function MainPage() {

  const artists = [
    {
      album: "Máquina do tempo",
      artist: "Matuê",
      cover:
        "https://i.ytimg.com/vi/9yjvDGE54SE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gIigkMA8=&rs=AOn4CLBV7EHsSmlluSRirgcurSU5HR4XiA",
    },
    {
      album: "333",
      artist: "Matuê",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVJfDa9wKQIYt-ljbnhNUF-DB-jmrMs6fzWyIRMnp--h08OCRhS57&usqp=CAE&s",
    },
    {
      album: "Celebridade",
      artist: "Orochi",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjlqoQtV79TlJtlaASqze-9yh3CDORMBBtmqGMF1XtY7loCy6RyXq&usqp=CAE&s",
    },
    {
      album: "Lobo",
      artist: "Orochi",
      cover:
        "https://i1.sndcdn.com/artworks-NthT8yTttLJDVriZ-Y13dOA-t500x500.jpg",
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
    {
      album: "Rodeo",
      artist: "Travis Scott",
      cover: "https://i.scdn.co/image/ab67616d0000b2736cfd9a7353f98f5165ea6160",
    },
    {
      album: "Rodeo",
      artist: "Travis Scott",
      cover: "https://i.scdn.co/image/ab67616d0000b2736cfd9a7353f98f5165ea6160",
    },
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

  return (
    <Container>
      <StoriesBar />
      <Section>
        <h3>Em Alta</h3>
        <ArrowButton onClick={() => scroll(-300)}>
          <ChevronLeft size={20} />
        </ArrowButton>
        <Row ref={carouselRef}>
          {artists.map((a) => (
            <ArtistCard
              key={a.album}
              album={a.album}
              artist={a.artist}
              cover={a.cover}
            />
          ))}
        </Row>
        <ArrowButton right onClick={() => scroll(300)}>
          <ChevronRight size={20} />
        </ArrowButton>
      </Section>

      <Section>
        <h3>Comentários</h3>
        <Wrap>
          <Header>
            <Avatar src="https://i.pravatar.cc/1005" alt="user" />
            <UserInfo>
              <span>Publicado por: Max Lima</span>
              <span>há 1h</span>
            </UserInfo>
          </Header>

          <SongBox bgColor={getRandomColor()}>
            <SongImage src="https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7" alt="O Som" />
            <SongInfo>
              <h4>O SOM</h4>
              <span>Matue • 333</span>
            </SongInfo>
            <Play size={24} />
          </SongBox>

          <Rating>★★★★★</Rating>
          <Title>Aquele som que bate diferente</Title>

          <Text>
            Quando ouvi “O Som” do Matuê pela primeira vez, senti uma vibe muito
            forte de confiança e presença. A batida prende logo de cara e a
            letra passa aquela sensação de “tô no controle”.
          </Text>

          <Footer>
            <Stat>
              <Heart size={18} /> 400k
            </Stat>
            <Stat>
              <MessageCircle size={18} /> 150k
            </Stat>
            <Stat>
              <Share2 size={18} />
            </Stat>
          </Footer>
        </Wrap>

        <Wrap>
          <Header>
            <Avatar src="https://i.pravatar.cc/1004" alt="user" />
            <UserInfo>
              <span>Publicado por: Max Lima</span>
              <span>há 1h</span>
            </UserInfo>
          </Header>

          <SongBox bgColor={getRandomColor()}>
            <SongImage src="https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7" alt="O Som" />
            <SongInfo>
              <h4>O SOM</h4>
              <span>Matue • 333</span>
            </SongInfo>
            <Play size={24} />
          </SongBox>

          <Rating>★★★★★</Rating>
          <Title>Aquele som que bate diferente</Title>

          <Text>
            Quando ouvi “O Som” do Matuê pela primeira vez, senti uma vibe muito
            forte de confiança e presença. A batida prende logo de cara e a
            letra passa aquela sensação de “tô no controle”.
          </Text>

          <Footer>
            <Stat>
              <Heart size={18} /> 400k
            </Stat>
            <Stat>
              <MessageCircle size={18} /> 150k
            </Stat>
            <Stat>
              <Share2 size={18} />
            </Stat>
          </Footer>
        </Wrap>

        <Wrap>
          <Header>
            <Avatar src="https://i.pravatar.cc/1003" alt="user" />
            <UserInfo>
              <span>Publicado por: Max Lima</span>
              <span>há 1h</span>
            </UserInfo>
          </Header>

          <SongBox bgColor={getRandomColor()}>
            <SongImage src="https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7" alt="O Som" />
            <SongInfo>
              <h4>O SOM</h4>
              <span>Matue • 333</span>
            </SongInfo>
            <Play size={24} />
          </SongBox>

          <Rating>★★★★★</Rating>
          <Title>Aquele som que bate diferente</Title>

          <Text>
            Quando ouvi “O Som” do Matuê pela primeira vez, senti uma vibe muito
            forte de confiança e presença. A batida prende logo de cara e a
            letra passa aquela sensação de “tô no controle”.
          </Text>

          <Footer>
            <Stat>
              <Heart size={18} /> 400k
            </Stat>
            <Stat>
              <MessageCircle size={18} /> 150k
            </Stat>
            <Stat>
              <Share2 size={18} />
            </Stat>
          </Footer>
        </Wrap>

        <Wrap>
          <Header>
            <Avatar src="https://i.pravatar.cc/1002" alt="user" />
            <UserInfo>
              <span>Publicado por: Max Lima</span>
              <span>há 1h</span>
            </UserInfo>
          </Header>

          <SongBox bgColor={getRandomColor()}>
            <SongImage src="https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7" alt="O Som" />
            <SongInfo>
              <h4>O SOM</h4>
              <span>Matue • 333</span>
            </SongInfo>
            <Play size={24} />
          </SongBox>

          <Rating>★★★★★</Rating>
          <Title>Aquele som que bate diferente</Title>

          <Text>
            Quando ouvi “O Som” do Matuê pela primeira vez, senti uma vibe muito
            forte de confiança e presença. A batida prende logo de cara e a
            letra passa aquela sensação de “tô no controle”.
          </Text>

          <Footer>
            <Stat>
              <Heart size={18} /> 400k
            </Stat>
            <Stat>
              <MessageCircle size={18} /> 150k
            </Stat>
            <Stat>
              <Share2 size={18} />
            </Stat>
          </Footer>
        </Wrap>

        <Wrap>
          <Header>
            <Avatar src="https://i.pravatar.cc/1001" alt="user" />
            <UserInfo>
              <span>Publicado por: Max Lima</span>
              <span>há 1h</span>
            </UserInfo>
          </Header>

          <SongBox bgColor={getRandomColor()}>
            <SongImage src="https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7" alt="O Som" />
            <SongInfo>
              <h4>O SOM</h4>
              <span>Matue • 333</span>
            </SongInfo>
            <Play size={24} />
          </SongBox>

          <Rating>★★★★★</Rating>
          <Title>Aquele som que bate diferente</Title>

          <Text>
            Quando ouvi “O Som” do Matuê pela primeira vez, senti uma vibe muito
            forte de confiança e presença. A batida prende logo de cara e a
            letra passa aquela sensação de “tô no controle”.
          </Text>

          <Footer>
            <Stat>
              <Heart size={18} /> 400k
            </Stat>
            <Stat>
              <MessageCircle size={18} /> 150k
            </Stat>
            <Stat>
              <Share2 size={18} />
            </Stat>
          </Footer>
        </Wrap>

      </Section>
    </Container>
  );
}
