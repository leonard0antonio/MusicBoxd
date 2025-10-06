import React from "react";
import styled from "styled-components";

const Sidebar: React.FC = () => {
  return (
    <Aside>
      <Top>
        <img src="./tela_principal/menu.png" alt="Logo" width={42}/>
      </Top>

      <Icons>
        <AddButton>
          <img src="./tela_principal/criar.png" alt="" width={39}/>
        </AddButton>
        <NavIcon>
          <img src="./tela_principal/home.png" alt="" width={39}/>
        </NavIcon>
        <NavIcon>
         <img src="./tela_principal/lupa.png" alt="" width={39}/>
        </NavIcon>
        <NavIcon>
          <img src="./tela_principal/Vector.png" alt="" width={39}/>
        </NavIcon>
        <NavIcon>
          <img src="./tela_principal/User.png" alt="" width={39}/>
        </NavIcon>
      </Icons>
    </Aside>
  );
};

export default Sidebar;



const Aside = styled.aside`
  width: 80px;
  background-color: #3c4060;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  border-right: 1px solid #2d3048;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 17px;
  border-bottom: 2px solid #2a2d46;
`;


const Icons = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const NavIcon = styled.div`
  color: white;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const AddButton = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #3b82f6;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 12px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }
`;
