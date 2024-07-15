import styled from 'styled-components';
import { navItems } from '../../util/data';
import { Image } from '../../styles/GlobalStyles';
import logo from '../../assets/conexion-logo.svg';
import theme from '../../styles/theme';

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #feffe6;
  color: ${theme.colors.accent};
  padding: .5rem 2rem;
  z-index: 100;
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
  &:hover {
    text-decoration: underline;
  }
`;

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

const Navbar = () => {
  return (
    <>
      <NavBar>
        <Logo><Image src={logo} /></Logo>
        {navItems.map(section => (
          <NavLink key={section.path} onClick={() => scrollToSection(section.path)}>
            {section.name}
          </NavLink>
        ))}
      </NavBar>
    </>
  );
};

export default Navbar;
