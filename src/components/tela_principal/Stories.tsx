import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #24273d; /* fundo do quadrado */
  border-radius: 12px;
  padding: 12px 15px;
  margin: 20px auto;
  max-width: 1000px;
  position: static;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  overflow-x: auto;

  /* esconde scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  position: static;
`;

const Story = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #9b87f5;
  object-fit: cover;
`;

const Name = styled.span`
  margin-top: 6px;
  font-size: 13px;
  color: #fff;
  max-width: 70px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Stories: React.FC = () => {
  const data = [
    { id: 1, name: "Leo Oliveira", img: "https://i.pravatar.cc/60?img=1" },
    { id: 2, name: "Max Lima", img: "https://i.pravatar.cc/60?img=2" },
    { id: 3, name: "Gil Nunes", img: "https://i.pravatar.cc/60?img=3" },
    { id: 4, name: "Dom Dias", img: "https://i.pravatar.cc/60?img=4" },
    { id: 5, name: "Iza Santos", img: "https://i.pravatar.cc/60?img=5" },
    { id: 6, name: "Rui Costa", img: "https://i.pravatar.cc/60?img=6" },
    { id: 7, name: "Nay Dias", img: "https://i.pravatar.cc/60?img=7" },
    { id: 8, name: "Ivo Souza", img: "https://i.pravatar.cc/60?img=8" },
  ];

  return (
    <Wrapper>
      <Container>
        {data.map((story) => (
          <Story key={story.id}>
            <Avatar src={story.img} alt={story.name} />
            <Name>{story.name}</Name>
          </Story>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Stories;
