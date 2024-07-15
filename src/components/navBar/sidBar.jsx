import styled from 'styled-components';
import { motion } from 'framer-motion';
import { navItems } from '../../util/data';

const Aside = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background: #fff;
  padding: 2rem;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 999;
`;

const SideMenu = styled.ul`
  list-style: none;
`;

const SideMenuItem = styled.a`
  margin: 1rem 0;
  cursor: pointer;
  text-decoration: none;
  color: black;
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
};

export default Sidebar;
