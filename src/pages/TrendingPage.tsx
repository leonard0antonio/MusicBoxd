import { AnimatedPage } from "../styles/styles";
import React from 'react';
import Trending from "../components/Trending_screen/Trending";

const TrendingPage: React.FC = () => {
  return <AnimatedPage> <Trending /> </AnimatedPage>;
};

export default TrendingPage;