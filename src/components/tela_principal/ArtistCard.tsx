import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Cover = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
`;

const Info = styled.div`
  margin-top: 8px;
  text-align: center;
  color: #fff;

  h4 {
    font-size: 14px;
    margin: 0;
  }

  p {
    font-size: 12px;
    opacity: 0.7;
    margin: 0;
  }
`;

type Props = {
  album: string;
  artist: string;
  cover: string;
};

const ArtistCard: React.FC<Props> = ({ album, artist, cover }) => {
  return (
    <Card>
      <Cover src={cover} alt={album} />
      <Info>
        <h4>{album}</h4>
        <p>{artist}</p>
      </Info>
    </Card>
  );
};

export default ArtistCard;
