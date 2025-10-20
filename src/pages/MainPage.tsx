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

import { Container, Section, Row, Wrap, Header, Avatar, UserInfo, SongBox, SongInfo, SongImage, Rating, Title, Text, Footer, Stat, ArrowButton, AnimatedPage } from "../styles/styles";


export default function MainPage() {

  const artists = [
    {
      album: "Máquina do Tempo",
      artist: "Matuê",
      cover: "https://tse4.mm.bing.net/th/id/OIP.sSIzOnAAlbq-_Oa1vOIMzQHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      album: "333",
      artist: "Matuê",
      cover: "https://thvnext.bing.com/th/id/OSK.U_fTHe-ys15JhyznVQYUNLfqJknwVE79Gp_1bJMOkcQ?w=152&h=152&c=7&o=6&cb=12&pid=SANGAM",
    },
    {
      album: "Celebridade",
      artist: "Orochi",
      cover: "https://thvnext.bing.com/th/id/OIP.cwH3mOB5rGNwlXCcfUQrfAHaHa?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      album: "Lobo",
      artist: "Orochi",
      cover: "https://thvnext.bing.com/th/id/OIP.MR6ssfR-cxlZIPeQfEwLzQHaEK?w=314&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
    },
    {
      album: "Dos Prédios Deluxe",
      artist: "Veigh",
      cover: "https://i.scdn.co/image/ab67616d0000b273ce0947b85c30490447dbbd91",
    },
    {
      album: "Rodeo",
      artist: "Travis Scott",
      cover: "https://i.scdn.co/image/ab67616d0000b2736cfd9a7353f98f5165ea6160",
    },
    {
      album: "previas.zip",
      artist: "Teto",
      cover: "https://thvnext.bing.com/th/id/OIP.WTE8hFKdaVYeJR2LiWbQ1AHaHa?w=182&h=182&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
    },
    {
      album: "Contradições",
      artist: "Kayblack",
      cover: "https://thvnext.bing.com/th/id/OIP.hPuEdgvs8d2zgumPt1mzSwHaHa?w=178&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
    },
    {
      album: "LUME",
      artist: "Filipe Ret",
      cover: "https://thvnext.bing.com/th/id/OIP.-Er_a-eJ2rs5isa-rw-kYwHaJP?w=143&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
    },
    {
      album: "Manual de Como Amar Errado",
      artist: "Wiu",
      cover: "https://thvnext.bing.com/th/id/OIP.mmA84_IzVZvlwidGUztefQHaHa?w=182&h=182&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
    },
    {
      album: "Astroworld",
      artist: "Travis Scott",
      cover: "https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3",
    },
    {
      album: "american dream",
      artist: "21 Savage",
      cover: "https://thvnext.bing.com/th/id/OIP.aLq5G_C6_fnrkJb-opn5UgHaHa?w=161&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
    },
    {
      album: "UTOPIA",
      artist: "Travis Scott",
      cover: "https://wallpapers.com/images/hd/travis-scott-utopia-album-teaser-o2nkxdn4tzvfx2cg.jpg",
    },
    {
      album: "ICARUS",
      artist: "BK'",
      cover: "https://thvnext.bing.com/th/id/OIP.1LWKrdH7u0x9tNuQt4kTkQHaE6?w=280&h=185&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
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
    <AnimatedPage>
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
              <Avatar src="https://i.pravatar.cc/1006" alt="user" />
              <UserInfo>
                <span>Publicado por: Lucas Pereira</span>
                <span>há 2 horas</span>
              </UserInfo>
            </Header>

            <SongBox bgColor={getRandomColor()}>
              <SongImage src="https://thvnext.bing.com/th/id/OIP.DbfjUme-kB_Z36wA7E4TUQHaKc?w=125&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3" alt="Ao Vivo No Olimpo" />
              <SongInfo>
                <h4>Deixa Acontecer</h4>
                <span>Grupo Revelação • Ao Vivo No Olimpo</span>
              </SongInfo>
              <Play size={24} />
            </SongBox>

            <Rating>★★★★★</Rating>
            <Title>A trilha sonora oficial do churrasco!</Title>

            <Text>
              É impressionante como "Deixa Acontecer" nunca envelhece. É só dar o play que todo mundo já abre um sorriso. A letra é simples e direta, sobre deixar o amor fluir. Um clássico absoluto do nosso pagode.
            </Text>

            <Footer>
              <Stat>
                <Heart size={18} /> 890k
              </Stat>
              <Stat>
                <MessageCircle size={18} /> 280k
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
                <span>Publicado por: Ana Clara</span>
                <span>há 3h</span>
              </UserInfo>
            </Header>

            <SongBox bgColor={getRandomColor()}>
              <SongImage src="https://thvnext.bing.com/th/id/OIP.BHbyxQDPsIxRFB1DxmkbEwHaHh?w=178&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3" alt="A Night at the Opera" />
              <SongInfo>
                <h4>Bohemian Rhapsody</h4>
                <span>Queen • A Night at the Opera</span>
              </SongInfo>
              <Play size={24} />
            </SongBox>

            <Rating>★★★★★</Rating>
            <Title>Uma obra de arte em forma de música</Title>

            <Text>
              "Bohemian Rhapsody" é uma jornada. A cada parte, da balada à ópera e ao rock pesado, você sente uma emoção diferente. É daquelas músicas que transcendem gerações e continuam geniais, não importa quantas vezes você ouça.
            </Text>

            <Footer>
              <Stat>
                <Heart size={18} /> 980k
              </Stat>
              <Stat>
                <MessageCircle size={18} /> 320k
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
                <span>Publicado por: Carlos Eduardo</span>
                <span>há 1 dia</span>
              </UserInfo>
            </Header>

            <SongBox bgColor={getRandomColor()}>
              <SongImage src="https://thvnext.bing.com/th/id/OIP.eLAu8JbCOKfUpodmVHbBAgHaHa?w=169&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3" alt="Elis & Tom" />
              <SongInfo>
                <h4>Águas de Março</h4>
                <span>Elis Regina & Tom Jobim • Elis & Tom</span>
              </SongInfo>
              <Play size={24} />
            </SongBox>

            <Rating>★★★★★</Rating>
            <Title>A poesia que define o Brasil</Title>

            <Text>
              Não existe nada como ouvir "Águas de Março". A letra é pura poesia, descrevendo o fim do verão com uma melancolia suave. A combinação das vozes de Elis e Tom é simplesmente perfeita, acalma a alma.
            </Text>

            <Footer>
              <Stat>
                <Heart size={18} /> 650k
              </Stat>
              <Stat>
                <MessageCircle size={18} /> 210k
              </Stat>
              <Stat>
                <Share2 size={18} />
              </Stat>
            </Footer>
          </Wrap>

          <Wrap>
            <Header>
              <Avatar src="https://i.pravatar.cc/1005" alt="user" />
              <UserInfo>
                <span>Publicado por: Juliana Santos</span>
                <span>há 5 dias</span>
              </UserInfo>
            </Header>

            <SongBox bgColor={getRandomColor()}>
              <SongImage src="https://thvnext.bing.com/th/id/OIP.tzARCz_GvhwauhnjU7OQEwHaEl?w=264&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3" alt="After Hours" />
              <SongInfo>
                <h4>Blinding Lights</h4>
                <span>The Weeknd • After Hours</span>
              </SongInfo>
              <Play size={24} />
            </SongBox>

            <Rating>★★★★☆</Rating>
            <Title>Perfeita para dirigir à noite!</Title>

            <Text>
              A batida de "Blinding Lights" te pega na hora! Tem uma vibe anos 80 total, com os sintetizadores pulsantes. É impossível ficar parado, dá uma energia incrível e uma vontade de sair pela cidade sem rumo.
            </Text>

            <Footer>
              <Stat>
                <Heart size={18} /> 1.2M
              </Stat>
              <Stat>
                <MessageCircle size={18} /> 450k
              </Stat>
              <Stat>
                <Share2 size={18} />
              </Stat>
            </Footer>
          </Wrap>

        </Section>
      </Container>
    </AnimatedPage>
  );
}
