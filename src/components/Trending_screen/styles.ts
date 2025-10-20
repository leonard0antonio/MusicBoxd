import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 80px;  // A
  color: white;
  background-color: #1b1e36;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: #ccc;
`;

export const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);  // 5 colunas fixas
  gap: 20px;
`;


export const AlbumCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AlbumImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
