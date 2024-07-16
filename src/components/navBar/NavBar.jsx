import React from 'react';
import styled from 'styled-components';
import { navItems } from '../../util/data';
import { Image } from '../../styles/GlobalStyles';
import logo from '../../assets/conexion-logo.svg';
import theme from '../../styles/theme';
import { mobile, tablet } from '../../util/responsive';

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #feffe6;
  color: ${theme.colors.accent};
  padding: .5rem 2rem;
  z-index: 100;

  ${tablet`
    padding: .5rem 1rem;
  `}
`;

const Logo = styled.a`
  display: flex;
  width: fit-content;
  height: 60px;
  align-items: center;
`;

const NavLink = styled.a`
  font-size: ${theme.fontSizes.small};
  font-weight: ${theme.fontWeight.medium};
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }

  ${mobile`
    display: none;
  `}
`;

const HamburgerButton = styled.div`
  display: none;

  ${mobile`
    display: block;
    cursor: pointer;
    margin-right: 10px;
    font-size: ${theme.fontSizes.large};
  `}
`;

const Navbar = ({ toggleSidebar }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  return (
    <NavBar>
      <Logo><Image src={logo} /></Logo>
      <HamburgerButton onClick={toggleSidebar}>
        &#9776; {/* Icono de hamburguesa */}
      </HamburgerButton>
      {navItems.map(section => (
        <NavLink key={section.path} onClick={() => scrollToSection(section.path)}>
          {section.name}
        </NavLink>
      ))}
    </NavBar>
  );
};

export default Navbar;
