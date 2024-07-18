import React from 'react';
import {
    FooterContainer,
    FooterSection,
    FooterLink,
    FooterSocialIcons,
    FooterSocialLink,
    FooterAssociation,
    AssociationLogo,
    AssociationName,
    AsociationLink,
    Title,
    WrapperSocialIcons,
    DescriptionLink,
    FooterCopyRight, Wrapper
} from './footerStyle';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Icon1 from '../../assets/logoKrea.svg';
import { Container } from '../../styles/GlobalStyles';
const Footer = () => {
  return (<Container>
    <FooterContainer>
    <Wrapper>
      <FooterSection>
        <Title>Conce más...</Title>
        <FooterLink href="#services">Servicios</FooterLink>
        <FooterLink href="#contact">Contacto</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterSocialIcons>
            <Title>Ver más de Conexión</Title>
            <WrapperSocialIcons>
            <FooterSocialLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </FooterSocialLink>
          <FooterSocialLink href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF />
          </FooterSocialLink>
          <FooterSocialLink href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn />
          </FooterSocialLink>
            </WrapperSocialIcons>
          
        </FooterSocialIcons>
      </FooterSection>
      <FooterSection>
        <FooterAssociation>
            <Title>Nuestros aliados:</Title>
        <AsociationLink href="https://krea-group.netlify.app/" target="_blank" aria-label="Krea, agencia creativa y marketing digital">
          <AssociationLogo src={Icon1} alt="Logo de la empresa" />
          <AssociationName>KREA, agencia creativa</AssociationName>
          </AsociationLink>
        <AsociationLink href="https://krea-group.netlify.app/" target="_blank" aria-label="Krea, agencia creativa y marketing digital">
          <AssociationLogo src="logo-url" alt="Logo de la empresa" />
          <AssociationName>Empresa, ABC....</AssociationName>
          </AsociationLink>
        </FooterAssociation>
      </FooterSection>
      </Wrapper>
      <DescriptionLink>Terminos de uso y politicas de privacidad.</DescriptionLink>
      <FooterCopyRight>© 2024 Conexión. Todos los derechos reservados.</FooterCopyRight>
    </FooterContainer>
    
    </Container>
  );
};

export default Footer;
