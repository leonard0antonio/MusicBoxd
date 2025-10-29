import styled, { keyframes } from "styled-components";

/*                MainPage                               */
export const Container = styled.main`
  max-width: 800px; /* ⬅ limite horizontal */
  margin: 0 auto;
  padding: 20px;
`;

export const Section = styled.section`
margin-top: 20px;
position: relative;

h3 {
  margin-bottom: 16px;
  font-size: 18px;
  color: #fff;
}
`;

export const Row = styled.div`
display: flex;
gap: 18px;
overflow-x: auto;
scroll-behavior: smooth;
padding-bottom: 8px;

&::-webkit-scrollbar {
  display: none;
}
`;

export const Wrap = styled.article`
background: #1b1d2a;
border-radius: 16px;
padding: 18px;
color: #fff;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
margin-bottom: 20px;
font-family: "Inter", sans-serif;
transition: transform 0.2s ease;
width: 100%;
max-width: 720px; /* ⬅ largura controlada */

&:hover {
  transform: scale(1.01);
}
`;

export const Header = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 12px;
`;

export const Avatar = styled.img`
width: 42px;
height: 42px;
border-radius: 50%;
`;

export const UserInfo = styled.div`
display: flex;
flex-direction: column;
font-size: 14px;

span:first-child {
  font-weight: 600;
}

span:last-child {
  color: #aaa;
  font-size: 13px;
}
`;

interface SongBoxProps {
  bgColor?: string;
}

export const SongBox = styled.div<SongBoxProps>`
display: flex;
align-items: center;
gap: 12px; /* espaço entre a imagem e o texto */
padding: 8px 12px;
background: ${props => props.bgColor || "#1e1e1e"};
border-radius: 8px;
`;

export const SongInfo = styled.div`
display: flex;
flex-direction: column;

h4 {
  font-size: 14px;
  font-weight: 700;
  margin: 0;
}

span {
  font-size: 12px;
  color: #e0e0e0;
}
`;

export const SongImage = styled.img`
width: 40px; /* tamanho fixo da imagem */
height: 40px;
border-radius: 4px;
object-fit: cover; /* mantém proporção e corta o excesso */
`;

export const Rating = styled.div`
color: #facc15;
font-size: 16px;
margin-bottom: 6px;
`;

export const Title = styled.h3`
font-size: 15px;
font-weight: 700;
margin: 0 0 8px 0;
`;

export const Text = styled.p`
color: #d3d6df;
line-height: 1.5;
margin-bottom: 16px;
font-size: 14px;
`;

export const Footer = styled.div`
display: flex;
justify-content: space-around;
border-top: 1px solid rgba(255, 255, 255, 0.1);
padding-top: 10px;
`;

export const Stat = styled.button`
display: flex;
background-color: transparent;
border: none;
align-items: center;
gap: 6px;
color: #ccc;
font-size: 13px;
`;

export const Like = styled.button`
display: flex;
background-color: transparent;
border: none;
align-items: center;
gap: 6px;
color: #ccc;
font-size: 13px;
`;

export const ArrowButton = styled.button<{ right?: boolean }>`
position: absolute;
top: 50%;
transform: translateY(-50%);
${(props) => (props.right ? "right: 0" : "left: 0")};
background: rgba(0, 0, 0, 0.5);
border: none;
color: white;
width: 36px;
height: 36px;
border-radius: 50%;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
z-index: 10;

&:hover {
  background: rgba(0, 0, 0, 0.7);
}
`;

export const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(10px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const AnimatedPage = styled.div`
animation: ${fadeIn} 0.5s ease;
`;

/*                ExplorePage                               */

export const ExploreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px;
  color: #fff;
  min-height: 100vh;
`;

export const Title_explore = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #aaa;
  margin-bottom: 40px;
`;