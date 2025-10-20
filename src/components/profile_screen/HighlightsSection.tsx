// src/components/Profile/HighlightsSection.tsx
import React from "react";
import { Section, SectionTitle, CardsRow, AlbumCard, AlbumCover, AlbumTitle, AlbumArtist, PageWrapper } from "../profile_screen/styles";

interface Highlight {
  cover: string;
  title: string;
  artist: string;
}

const highlights: Highlight[] = [
  { cover: "https://tse2.mm.bing.net/th/id/OIP.k7iYyvy_qIrSqojVPiK9MwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", title: "Meu abrigo", artist: "Melim" },
  { cover: "https://tse2.mm.bing.net/th/id/OIP.uCFM5QvxV0fwOVHWemSC6wHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", title: "Chop Suey!", artist: "System of a Down" },
  { cover: "https://cdn.gelestatic.it/capital/sites/2/2022/08/nirvana-smells-like-teen-spirit.jpg", title: "Smells Like Teen Spirit", artist: "Nirvana" },
  { cover: "https://images.genius.com/9ad6b0cf1f27112ec14bd9af064c6d5c.1000x1000x1.jpg", title: "Com ou sem mim", artist: "Gustavo Mioto" },
  { cover: "https://tse4.mm.bing.net/th/id/OIP.HOcYZcFxazgt98nR7HYKJgAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3", title: "Dangerous Woman", artist: "Ariana Grande" },
];

export const HighlightsSection: React.FC = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};
