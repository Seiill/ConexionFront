import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../theme';

const ScrollButton = styled(motion.button)`
  position: fixed;
  bottom: 50px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  border: none;
  border-radius: 20%;
  display: ${props => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accent};
    transform: scale(1.1);
    color:  ${theme.colors.primary};
  }
`;

const Arrow = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
`;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ScrollButton
      visible={visible}
      onClick={scrollToTop}
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Arrow>↑</Arrow>
    </ScrollButton>
  );
};

export default ScrollToTopButton;
