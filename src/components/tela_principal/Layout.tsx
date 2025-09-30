import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import RightBar from "./RightBar";
import Stories from "./Stories";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <MainArea>
        <Navbar />
        <Stories />
        <Content>{children}</Content>
      </MainArea>
      <RightBar />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr 300px;
  height: 100vh;
  background-color: #1e2131;
  color: #fff;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;

  /* Esconde a scrollbar no Chrome, Edge e Safari */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Esconde no Firefox */
  scrollbar-width: none;
`;

