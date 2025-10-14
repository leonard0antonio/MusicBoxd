import styled from "styled-components";
import { Play, Heart, MessageCircle, Share2 } from "lucide-react";

const Wrap = styled.article`
  background: #1b1d2a;
  border-radius: 16px;
  padding: 20px;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
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

const SongBox = styled.div`
  background: #3b82f6;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  color: white;
  margin-bottom: 16px;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 15px;
    font-weight: 700;
    margin: 0;
  }

  span {
    font-size: 13px;
    color: #e0e0e0;
  }
`;

const Rating = styled.div`
  color: #facc15;
  font-size: 18px;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

const Text = styled.p`
  color: #d3d6df;
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 14px;
  margin-top: 8px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #ccc;
  font-size: 14px;
`;

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
