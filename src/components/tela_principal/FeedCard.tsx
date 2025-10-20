import { Play, Heart, MessageCircle, Share2 } from "lucide-react";

import { Wrap, Header, Avatar, UserInfo, SongBox, SongInfo, Rating, Title, Text, Footer, Stat } from "../tela_principal/styles"

export default function FeedCard() {
  return (
    <Wrap>
      <Header>
        <Avatar src="https://i.pravatar.cc/100" alt="user" />
        <UserInfo>
          <span>Publicado por: Max Lima</span>
          <span>há 1h</span>
        </UserInfo>
      </Header>

      <SongBox>
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
        forte de confiança e presença. A batida prende logo de cara e a letra
        passa aquela sensação de “tô no controle”.
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
  );
}
