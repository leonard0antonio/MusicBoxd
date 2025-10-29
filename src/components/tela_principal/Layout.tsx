import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import {
  Container,
  MainArea,
  Content
} from "../tela_principal/styles"

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <MainArea>
        <Navbar />
        <Content>{children}</Content>
      </MainArea>
    </Container>
  );
};

export default Layout;



