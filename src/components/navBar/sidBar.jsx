import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { navItems } from '../../util/data';
import theme from '../../styles/theme';
import { tablet } from '../../util/responsive';

const Aside = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background: ${theme.colors.secondary};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
${tablet({
  width: '100%',
  padding: '1rem',
})
   
  }
`;

const SideMenu = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
gap: 2rem;
align-items: center;
list-style: none;
`;

const SideMenuItem = styled.a`
font-size:${theme.fontSizes.medium};
font-weight:${theme.fontWeight.medium};
  margin: 1rem 0;
  cursor: pointer;
  text-decoration: none;
  color: ${theme.colors.primary};
  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = ({ isOpen, onClose }) => {
  if (typeof isOpen !== 'boolean') {
    console.error('Propiedad isOpen no es un booleano');
  }
  if (typeof onClose !== 'function') {
    console.error('Propiedad onClose no es una función');
  }

  return (
    <Aside
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <SideMenu>
        {navItems.map(item => (
          <SideMenuItem key={item.path} href={`#${item.path}`} onClick={onClose}>
            {item.name}
          </SideMenuItem>
        ))}
      </SideMenu>
    </Aside>
  );
};

export default Sidebar;
