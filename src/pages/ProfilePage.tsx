// src/pages/Profile.tsx
import React from "react";
import styled from "styled-components";
import { ProfileHeader } from "../components/profile_screen/ProfileHeader";
import { HighlightsSection } from "../components/profile_screen/HighlightsSection";
import { ReviewsSection } from "../components/profile_screen/ReviewsSection";
import { PlaylistsSection } from "../components/profile_screen/PlaylistsSection";

export const ProfilePage: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileHeader />
      <HighlightsSection />
      <ReviewsSection />
      <PlaylistsSection />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  background-color: #1e2131;
  min-height: 100vh;
  padding-bottom: 80px;
`;