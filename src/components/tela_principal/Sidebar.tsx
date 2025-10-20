import React from "react";
import { Link } from "react-router";

import {
  Aside,
  Top,
  Icons,
  NavIcon,
  AddButton,
} from "../tela_principal/styles"

const Sidebar: React.FC = () => {
  return (
    <Aside>
      <Top>
        <img src="./tela_principal/menu.png" alt="Logo" width={42} />
      </Top>

      <Icons>
        <AddButton>
          <img src="./tela_principal/criar.png" alt="" width={39} />
        </AddButton>
        <NavIcon>
          <Link to="/">
            <img src="./tela_principal/home.png" alt="" width={39} />
          </Link>
        </NavIcon>
        <NavIcon>
          <img src="./tela_principal/lupa.png" alt="" width={39} />
        </NavIcon>
        <NavIcon>
          <Link to="/trendig">
          <img src="./tela_principal/Vector.png" alt="" width={39} />
          </Link>
        </NavIcon>
        <NavIcon>
          <Link to="/profile">
            <img src="./tela_principal/User.png" alt="" width={39} />
          </Link>
        </NavIcon>
      </Icons>
    </Aside>
  );
};

export default Sidebar;