// src/components/Profile/HighlightsSection.tsx
import React from "react";
import { Section, SectionTitle, CardsRow, AlbumCard, AlbumCover, AlbumTitle, AlbumArtist } from "../profile_screen/styles";

interface Highlight {
  cover: string;
  title: string;
  artist: string;
}

const highlights: Highlight[] = [
  { cover: "https://i.imgur.com/Xt5lC2V.jpg", title: "Meu abrigo", artist: "Melim" },
  { cover: "https://i.imgur.com/93V6WlV.jpg", title: "Chop Suey!", artist: "System of a Down" },
  { cover: "https://i.imgur.com/4AKuJ1P.jpg", title: "Smells Like Teen Spirit", artist: "Nirvana" },
  { cover: "https://i.imgur.com/9hGz7wG.jpg", title: "Com ou sem mim", artist: "Gustavo Mioto" },
  { cover: "https://i.imgur.com/94Zy5Ff.jpg", title: "Dangerous Woman", artist: "Ariana Grande" },
];

export const HighlightsSection: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Destaques</SectionTitle>
      <CardsRow>
        {highlights.map((album, index) => (
          <AlbumCard key={index}>
            <AlbumCover src={album.cover} alt={album.title} />
            <AlbumTitle>{album.title}</AlbumTitle>
            <AlbumArtist>{album.artist}</AlbumArtist>
          </AlbumCard>
        ))}
      </CardsRow>
    </Section>
  );
};
