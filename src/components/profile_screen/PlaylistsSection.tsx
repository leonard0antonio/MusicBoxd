// src/components/Profile/PlaylistsSection.tsx
import React from "react";
import { Section, SectionTitle, PlaylistGrid, PlaylistCard, PlaylistCover, PlaylistName, PlaylistDesc } from "../profile_screen/styles";

interface Playlist {
  name: string;
  desc: string;
  cover: string;
}

const playlists: Playlist[] = [
  {
    name: "Revolucionário!",
    desc: "Trap tem um antes e depois do Matuê.",
    cover: "https://i.imgur.com/lV2hIYv.png",
  },
  {
    name: "Maior Cantor da Nova Geração",
    desc: "Verso afiado, mente visionária. BK representa a nova era.",
    cover: "https://i.imgur.com/s6eKQlE.png",
  },
  {
    name: "As melhores de 2025",
    desc: "Criei essa playlist pra colocar todas as melhores músicas que ouvi.",
    cover: "https://i.imgur.com/6HW9s6Y.png",
  },
];

export const PlaylistsSection: React.FC = () => {
  return (
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
  );
};
