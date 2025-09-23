import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  min-width: 220px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
`;
const Cover = styled.div`
  height: 110px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
`;
const Body = styled.div`
  padding: 12px;
`;
const Title = styled.div`
  font-weight: 600;
`;
const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  margin-top: 6px;
`;

export default function MusicCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Card>
      <Cover />
      <Body>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Body>
    </Card>
  );
}
