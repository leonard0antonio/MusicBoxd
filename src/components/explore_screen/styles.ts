import styled from "styled-components";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  justify-items: center;
`;

export const GenreCard = styled.div<{ $color: string }>`
  position: relative;
  width: 160px;
  height: 120px;
  border-radius: 14px;
  background-color: ${({ $color }) => $color};
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  }
`;

export const GenreName = styled.h3`
  position: absolute;
  top: 14px;
  left: 14px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  z-index: 2;
`;

export const GenreImage = styled.img`
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 90px;
  height: 90px;
  border-radius: 8px;
  transform: rotate(-15deg);
  object-fit: cover;
  z-index: 1;
  transition: transform 0.3s ease;

  ${GenreCard}:hover & {
    transform: rotate(-8deg) scale(1.05);
  }
`;
