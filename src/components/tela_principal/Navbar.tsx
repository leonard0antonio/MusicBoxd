import React from "react";
import styled from "styled-components";
import { Search, Bell, PlusCircle, Menu } from "lucide-react";

const Container = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2a2d3e;
  padding: 10px 20px;
  border-bottom: 1px solid #3a3d52;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 1024px) {
    display: none; /* Esconde em telas grandes */
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 28px;
    height: 28px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: #fff;

    span {
      color: #f1c40f;
    }
  }
`;

const Center = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 40px;
  position: relative;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #bbb;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 14px 10px 38px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #3a3d52;
  color: #fff;
  font-size: 14px;

  &::placeholder {
    color: #aaa;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: none;
  border-radius: 20px;
  background-color: #5865f2;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    background-color: #4752c4;
  }
`;

const Notification = styled.div`
  position: relative;
  cursor: pointer;
  color: #fff;
`;

const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e74c3c;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
`;

const Profile = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #5865f2;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type NavbarProps = {
  onToggleSidebar?: () => void; // função recebida do Layout
};

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <Container>
      {/* Lado esquerdo */}
      <Left>
        {/* Botão de menu */}
        <MenuButton onClick={onToggleSidebar}>
          <Menu size={22} />
        </MenuButton>

        <Logo>
          <img src="./logo-Music.png" alt="Logo" />
          <span>
            Music<span>Boxd</span>
          </span>
        </Logo>
      </Left>

      {/* Centro */}
      <Center>
        <SearchIcon>
          <Search size={18} />
        </SearchIcon>
        <Input placeholder="Pesquisar músicas ou álbuns" />
      </Center>

      {/* Direita */}
      <Right>
        <Button>
          <PlusCircle size={18} />
          Publicar algo
        </Button>

        <Notification>
          <Bell size={20} />
          <Badge>2</Badge>
        </Notification>

        <Profile>
          <img src="./PROFILE_PICTURE.png" alt="Perfil" />
        </Profile>
      </Right>
    </Container>
  );
};

export default Navbar;


