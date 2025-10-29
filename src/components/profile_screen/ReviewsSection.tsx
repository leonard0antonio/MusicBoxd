// src/components/Profile/ReviewsSection.tsx
import React from "react";
import { Section, SectionTitle, ReviewGrid, ReviewCard, ReviewAlbum, ReviewTitle, ReviewText, Stars, PageWrapper } from "./styles";

interface Review {
  title: string;
  album: string;
  stars: number;
  text: string;
  color: string;
}

const reviews: Review[] = [
  {
    title: "777-666",
    album: "Matuê - Máquina do Tempo",
    stars: 5,
    text: "É impossível não se deixar levar por Matuê...",
    color: "#a84aff",
  },
  {
    title: "Reputation",
    album: "Taylor Swift - Album",
    stars: 3,
    text: "Tentativa de ser edgy que envelheceu mal.",
    color: "#5b5b5b",
  },
  {
    title: "Nevermind",
    album: "Nirvana - Album",
    stars: 4,
    text: "Perfeito do início ao fim. Simples assim.",
    color: "#0090ff",
  },
];

export const ReviewsSection: React.FC = () => {
  return (
    <PageWrapper>
    <Section>
      <SectionTitle>Avaliações</SectionTitle>
      <ReviewGrid>
        {reviews.map((review, index) => (
          <ReviewCard key={index} $bg={review.color}>
            <ReviewAlbum>{review.title}</ReviewAlbum>
            <ReviewTitle>{review.album}</ReviewTitle>
            <Stars>{"⭐".repeat(review.stars)}</Stars>
            <ReviewText>{review.text}</ReviewText>
          </ReviewCard>
        ))}
      </ReviewGrid>
    </Section>
    </PageWrapper>
  );
};
