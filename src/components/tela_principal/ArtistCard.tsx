import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84px;
`;
const Avatar = styled.div<{ color?: string }>`
  width: 64px;
  height: 64px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background: ${(p) => p.color || "#555"};
`;
const Name = styled.div`
  margin-top: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export default function ArtistCard({
  name,
  color,
}: {
  name: string;
  color?: string;
}) {
  return (
    <Box>
      <Avatar color={color}>{name.slice(0, 2).toUpperCase()}</Avatar>
      <Name>{name}</Name>
    </Box>
  );
}
