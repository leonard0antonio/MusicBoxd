// src/pages/Profile.tsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { ProfileHeader } from "../components/profile_screen/ProfileHeader";
import { HighlightsSection } from "../components/profile_screen/HighlightsSection";
import { ReviewsSection } from "../components/profile_screen/ReviewsSection";
import { PlaylistsSection } from "../components/profile_screen/PlaylistsSection";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  animation: ${fadeIn} 0.6s ease forwards;
  padding: 20px;
`;

export const ProfilePage: React.FC = () => {
  return (
    <PageContainer>
      <ProfileContainer>
        <ProfileHeader />
        <HighlightsSection />
        <ReviewsSection />
        <PlaylistsSection />
      </ProfileContainer>
    </PageContainer>
  );
};

const ProfileContainer = styled.div`
  background-color: #1e2131;
  min-height: 100vh;
  padding-bottom: 80px;
`;