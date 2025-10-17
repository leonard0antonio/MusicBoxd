import React from "react";
import {
  HeaderContainer,
  Avatar,
  InfoSection,
  TopRow,
  Stats,
  StatItem,
  ButtonGroup,
  Button,
  Name,
  Bio,
} from "./styles";

export const ProfileHeader: React.FC = () => {
  return (
    <HeaderContainer>
     <Avatar src="./PROFILE_PICTURE.png" alt="Perfil" /> 

      <InfoSection>
        <TopRow>
          <Stats>
            <StatItem>
              <strong>5</strong>
              <span>Comentários</span>
            </StatItem>
            <StatItem>
              <strong>10</strong>
              <span>Avaliações</span>
            </StatItem>
            <StatItem>
              <strong>24</strong>
              <span>Seguidores</span>
            </StatItem>
          </Stats>

          <ButtonGroup>
            <Button $primary>Compartilhe seu perfil</Button>
            <Button>Editar perfil</Button>
          </ButtonGroup>
        </TopRow>

        <Name>Leonardo Oliveira</Name>
        <Bio>
          Se é Matuê, já tá no repeat. Se é lo-fi, tá tocando enquanto penso na vida.
          Se é phonk, tá batendo no carro com o grave no talo. Aqui eu avalio o que me
          move — das batidas que embalam a madrugada aos versos que grudam na mente.
          Minha vibe é intensa, minha playlist é sincera. 😜🔥
        </Bio>
      </InfoSection>
    </HeaderContainer>
  );
};
