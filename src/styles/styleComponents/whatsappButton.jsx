import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../theme'; // Asegúrate de que la ruta sea correcta
import Icon from '../../assets/whatsapp.svg'; 
const Image = styled.img`
width: 80%;
object-fit: cover;
object-position: center;

`
const FloatingButton = styled(motion.div)`
  position: fixed;
  bottom: 110px;
  right: 20px;
  width: 50px;
  height: 50px; /* Asegúrate de que el alto sea igual al ancho si quieres un botón circular */
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  border-radius: 20%;
  display: ${props => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accent};
    transform: scale(1.1);
    color: ${theme.colors.primary};
  }
`;

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '+573145597210'; 
    const message = '¡Hola! Necesito más información sobre las consultorias que ofrecen para mi empresa.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <FloatingButton
      visible={visible}
      onClick={openWhatsApp}
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Image src= {Icon} alt ='Icono de whatasapp que permite enviar un mensaje al dueño del sitio web'></Image>
    </FloatingButton>
  );
};

export default WhatsAppButton;
