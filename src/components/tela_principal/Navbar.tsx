import React from "react";
import { Search, Bell, PlusCircle, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Container_nav,
Left,
MenuButton,
Logo,
Center,
SearchIcon,
Input,
Right,
Button,
Notification,
Badge,
Profile,
ProfileImage

} from "../tela_principal/styles"

type NavbarProps = {
  onToggleSidebar?: () => void; // função recebida do Layout
};

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <Container_nav>
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
          <Link to="/profile">
            <ProfileImage src="./PROFILE_PICTURE.png" alt="Perfil" />
          </Link>
        </Profile>

      </Right>
    </Container_nav>
  );
};

export default Navbar;


