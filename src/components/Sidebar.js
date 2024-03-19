import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logoImage from '../assets/decorations/logo.png';
import backgroundImage from '../assets/decorations/sidebar-background.jpeg';
import facebookIcon from '../assets/icons/Facebook.png';
import instagramIcon from '../assets/icons/Instagram.png';

const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  // background-image: linear-gradient(to right, rgba(0, 0, 0, 0)190px, rgba(0, 0, 0, 0.1j)),url(${backgroundImage});
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  transition: width 0.3s ease;
  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 576px) {
    width: 100px;
  }
`;

const Logo = styled.img`
  width: 100px;
  margin: 20px auto;
  display: block;
`;

const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SidebarMenuItem = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #333;
  transition: color 0.2s, font-weight 0.2s;
  &:hover {
    color: #FFF;
    font-weight: bold;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 10px;
  color: #333;
  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

const SocialMediaIconImage = styled.img`
  width: 25px;
  margin: auto;
  display: block;
  filter: invert(0%);
  transition: transform 0.2s, filter 0.2s;
  &:hover {
    transform: scale(1.1);
    filter: invert(100%);
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo src={logoImage} alt="Logo" />
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarLink to="/">HOME</SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink to="/portrait">PORTRAIT</SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarLink to="/travel">TRAVE</SidebarLink>
        </SidebarMenuItem>
      </SidebarMenu>
      <SocialMediaIcons>
        <SocialMediaIcon  href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <SocialMediaIconImage src={facebookIcon} alt="Facebook" />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <SocialMediaIconImage src={instagramIcon} alt="Instagram" />
        </SocialMediaIcon>
      </SocialMediaIcons>
    </SidebarContainer>
  );
};

export default Sidebar;