import React from "react";
import styled from "styled-components";

const Container = styled.aside`
  background-color: #181a28;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: hidden;
`;

const AdCard = styled.div`
  background-color: #24273d;
  border-radius: 12px;
  padding: 16px;
  color: #fff;

  h3 {
    margin-bottom: 8px;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    opacity: 0.8;
  }
`;

const Button = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #9b87f5;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #7c63d3;
  }
`;


const RightBar: React.FC = () => {
  return (
    <Container>
      <AdCard>
        <h3>🎧 Oferta Premium</h3>
        <p>Assine agora e tenha acesso ilimitado.</p>
        <Button>Assinar</Button>
      </AdCard>

      <AdCard>
        <h3>🔥 Promoção</h3>
        <p>Ganhe 3 meses grátis de música sem anúncios.</p>
        <Button>Ativar</Button>
      </AdCard>
    </Container>
  );
};

export default RightBar;

