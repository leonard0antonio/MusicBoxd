import styled from "styled-components";

const Wrap = styled.article`
  background: ${({ theme }) => theme.colors.background};
  padding: 14px;
  border-radius: 12px;
  margin-bottom: 14px;
`;
const Header = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const Avatar = styled.div<{ color?: string }>`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background: ${(p) => p.color || "#555"};
`;
const User = styled.div`
  font-weight: 600;
`;
const Rating = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 14px;
`;
const Text = styled.p`
  color: #d3d6df;
  margin: 12px 0;
`;
const Actions = styled.div`
  display: flex;
  gap: 8px;
`;
const Btn = styled.button<{ ghost?: boolean }>`
  padding: 6px 10px;
  border-radius: 8px;
  border: ${(p) => (p.ghost ? "1px solid rgba(255,255,255,0.04)" : "0")};
  background: ${(p) => (p.ghost ? "transparent" : "#2c2f42")};
  color: #fff;
`;

export default function FeedCard({
  user,
  rating,
  text,
  color,
}: {
  user: string;
  rating: number;
  text: string;
  color?: string;
}) {
  return (
    <Wrap>
      <Header>
        <Avatar color={color}>
          {user
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase()}
        </Avatar>
        <div>
          <User>{user}</User>
          <Rating>{"★".repeat(rating)}</Rating>
        </div>
      </Header>
      <Text>{text}</Text>
      <Actions>
        <Btn>Curtir</Btn>
        <Btn ghost>Comentar</Btn>
      </Actions>
    </Wrap>
  );
}
