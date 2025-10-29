import React from "react";
import { Card,Cover, Info } from "../tela_principal/styles"

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
