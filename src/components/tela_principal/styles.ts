import styled, { keyframes } from "styled-components";

//# ArtistCard #//

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Cover = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
`;

export const Info = styled.div`
  margin-top: 8px;
  text-align: center;
  color: #fff;

  h4 {
    font-size: 14px;
    margin: 0;
  }

  p {
    font-size: 12px;
    opacity: 0.7;
    margin: 0;
  }
`;



//#  FeedCard  #//

export const Wrap = styled.article`
  background: #1b1d2a;
  border-radius: 16px;
  padding: 20px;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  span:first-child {
    font-weight: 600;
  }

  span:last-child {
    color: #aaa;
    font-size: 13px;
  }
`;

export const SongBox = styled.div`
  background: #3b82f6;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  color: white;
  margin-bottom: 16px;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 15px;
    font-weight: 700;
    margin: 0;
  }

  span {
    font-size: 13px;
    color: #e0e0e0;
  }
`;

export const Rating = styled.div`
  color: #facc15;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

export const Text = styled.p`
  color: #d3d6df;
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 14px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 14px;
  margin-top: 8px;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #ccc;
  font-size: 14px;
`;



//#  Layout  #//

export const Container = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  height: 100vh;
  background-color: #1e2131;
  color: #fff;
`;


export const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.main`
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



//#  Navbar  #//

 export const Container_nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2a2d3e;
  padding: 10px 20px;
  border-bottom: 1px solid #3a3d52;
`;

 export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

 export const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 1024px) {
    display: none; /* Esconde em telas grandes */
  }
`;

 export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 28px;
    height: 28px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: #fff;

    span {
      color: #f1c40f;
    }
  }
`;

 export const Center = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 40px;
  position: relative;
`;

 export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #bbb;
`;

 export const Input = styled.input`
  width: 100%;
  padding: 10px 14px 10px 38px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #3a3d52;
  color: #fff;
  font-size: 14px;

  &::placeholder {
    color: #aaa;
  }
`;

 export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

 export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: none;
  border-radius: 20px;
  background-color: #5865f2;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    background-color: #4752c4;
  }
`;

 export const Notification = styled.div`
  position: relative;
  cursor: pointer;
  color: #fff;
`;

 export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e74c3c;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
`;

 export const Profile = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #5865f2;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

 export const hoverEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%; // circular
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
    animation: ${hoverEffect} 0.5s ease-in-out;
}
`;


//#  Sidebar   #//

export const Aside = styled.aside`
  width: 80px;
  background-color: #3c4060;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  border-right: 1px solid #2d3048;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 17px;
  border-bottom: 2px solid #2a2d46;
`;

export const Icons = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

export const NavIcon = styled.div`
  color: white;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export const AddButton = styled.div`
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

