import React from "react";
import styled from "styled-components";
import { Home, Music, Star, Settings } from "lucide-react";

const Container = styled.aside`
  background-color: #181a28;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.2s ease;

  &:hover {
    color: #9b87f5;
  }
`;


const Sidebar: React.FC = () => {
  return (
    <Container>
      <Logo>🎵</Logo>
      <Menu>
        <MenuItem><Home size={20}/> Home</MenuItem>
        <MenuItem><Music size={20}/> Músicas</MenuItem>
        <MenuItem><Star size={20}/> Favoritos</MenuItem>
        <MenuItem><Settings size={20}/> Config</MenuItem>
      </Menu>
    </Container>
  );
};

export default Sidebar;

