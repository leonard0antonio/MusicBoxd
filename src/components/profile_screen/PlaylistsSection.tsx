// src/components/Profile/PlaylistsSection.tsx
import React from "react";
import { Section, SectionTitle, PlaylistGrid, PlaylistCard, PlaylistCover, PlaylistName, PlaylistDesc, PageWrapper } from "../profile_screen/styles";

interface Playlist {
  name: string;
  desc: string;
  cover: string;
}

const playlists: Playlist[] = [
  {
    name: "Revolucionário!",
    desc: "Trap tem um antes e depois do Matuê.",
    cover: "https://tse4.mm.bing.net/th/id/OIP.ZUZTQhk-s6TWdbCne6d01AHaEK?cb=12&w=1200&h=675&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Maior Cantor da Nova Geração",
    desc: "Verso afiado, mente visionária. BK representa a nova era.",
    cover: "https://rapnarua.com.br/wp-content/uploads/2024/03/Untitled-1-e1710638221518.jpeg",
  },
  {
    name: "As melhores de 2025",
    desc: "Criei essa playlist pra colocar todas as melhores músicas que ouvi.",
    cover: "https://cdn.maioresemelhores.com/imagens/as-musicas-mais-tocadas-no-brasil-em-2025-og.jpg",
  },
];

export const PlaylistsSection: React.FC = () => {
  return (
    <PageWrapper>
    <Section>
      <SectionTitle>Playlists</SectionTitle>
      <PlaylistGrid>
        {playlists.map((playlist, index) => (
          <PlaylistCard key={index}>
            <PlaylistCover src={playlist.cover} alt={playlist.name} />
            <div>
              <PlaylistName>{playlist.name}</PlaylistName>
              <PlaylistDesc>{playlist.desc}</PlaylistDesc>
            </div>
          </PlaylistCard>
        ))}
      </PlaylistGrid>
    </Section>
    </PageWrapper>
  );
};
