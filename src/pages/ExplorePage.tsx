import ExploreCards from "../components/explore_screen/ExploreCards";
import {
  AnimatedPage,
  ExploreWrapper,
  Title_explore,
  Subtitle,
} from "../styles/styles";
import React from "react";

const ExplorePage: React.FC = () => {
  return (
    <AnimatedPage>
      {" "}
      <ExploreWrapper>
        <Title_explore>Explorar</Title_explore>
        <Subtitle>Navegue e explore o nosso catálogo</Subtitle>
        <ExploreCards />
      </ExploreWrapper>
    </AnimatedPage>
  );
};

export default ExplorePage;
