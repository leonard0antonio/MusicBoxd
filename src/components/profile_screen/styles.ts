// src/components/Profile/styles.ts
import styled, { css } from "styled-components";

/* HEADER */
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  background: transparent;
  color: #fff;
  max-width: 1000px;
  width: 100%;
  padding: 40px 60px;
  border-radius: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 30px 20px;
  }

`;

export const PageWrapper = styled.div`
display: flex;
justify-content: center; /* centraliza horizontalmente */
align-items: center;     /* centraliza verticalmente */
padding: 20px;
`;

export const Avatar = styled.img`
    width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid #4c4cff;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 20px;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Bio = styled.p`
  max-width: 700px;
  color: #ccc;
  font-size: 1rem;
  line-height: 1.6;
`;

export const Stats = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  strong {
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;
  }

  span {
    font-size: 0.95rem;
    color: #ccc;
  }
`;

export const ButtonGroup = styled.div`
   display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Button = styled.button<{ $primary?: boolean }>`
  border: none;
  padding: 12px 22px;
  border-radius: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $primary }) =>
    $primary
      ? css`
          background: linear-gradient(90deg, #6366f1, #3b82f6);
          color: #fff;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
          &:hover {
            opacity: 0.9;
          }
        `
      : css`
          background: #262626;
          color: #fff;
          &:hover {
            background: #333;
          }
        `}
`;




/* SECTIONS */
export const Section = styled.section`
  max-width: 1100px;
  color: white;
`;

export const SectionTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const CardsRow = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

export const AlbumCard = styled.div`
  width: 130px;
  text-align: center;
`;

export const AlbumCover = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const AlbumTitle = styled.h4`
  font-size: 14px;
  margin-top: 8px;
`;

export const AlbumArtist = styled.p`
  font-size: 12px;
  color: #bbb;
`;

/* REVIEWS */
export const ReviewGrid = styled.div`
  display: flex;       /* troca de grid para flex */
  flex-wrap: wrap;     /* permite quebrar linha se necessário */
  gap: 15px;           /* espaço entre cards */
  justify-content: flex-start; /* alinha do lado esquerdo */
`;

export const ReviewCard = styled.div<{ $bg?: string }>`
  background: ${({ $bg }) => $bg || "#333"};
  padding: 18px;
  border-radius: 14px;
  flex: 1 1 250px; /* cresce e encolhe, largura mínima 250px */
  max-width: 300px; /* opcional: limitar largura */
`;

export const ReviewAlbum = styled.h4`
  font-size: 16px;
  font-weight: 700;
`;

export const ReviewTitle = styled.p`
  font-size: 13px;
  color: #ddd;
`;

export const Stars = styled.div`
  margin: 8px 0;
`;

export const ReviewText = styled.p`
  font-size: 13px;
  color: #ccc;
`;

/* PLAYLISTS */
export const PlaylistGrid = styled.div`
  display: flex;
  flex-wrap: wrap;           /* permite quebrar linha se necessário */
  gap: 15px;                 /* espaço entre cards */
  justify-content: flex-start; /* alinha do lado esquerdo */
`;

export const PlaylistCard = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  background: #1f1f2e;
  padding: 14px;
  border-radius: 12px;
  flex: 1 1 300px;  /* cresce e encolhe, largura mínima 300px */
  max-width: 350px;  /* opcional: limitar largura máxima */
`;

export const PlaylistCover = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  object-fit: cover;
`;

export const PlaylistName = styled.h4`
  font-size: 16px;
`;

export const PlaylistDesc = styled.p`
  font-size: 13px;
  color: #bbb;
`;


