import styled from 'styled-components';
import theme from '../../styles/theme';

export const FooterContainer = styled.footer`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  color: #fff;
  height: 60vh;
`;
export const Wrapper = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FooterCopyRight = styled.div`
width: 100%;
font-size:${theme.fontSizes.small};
color:${theme.colors.blue};
padding: ${theme.spacing.small};
text-align: center;
`
export const DescriptionLink= styled.a`
padding: ${theme.spacing.small};
color: ${theme.colors.blue};
  text-decoration: none;
  margin: 5px 0;
  text-align: center;
  
  &:hover {
    text-decoration: underline;
  }
`
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 5px 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const WrapperSocialIcons = styled.div`
display: flex;
`
export const FooterSocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px 0;
`;

export const FooterSocialLink = styled.a`
  color: ${theme.colors.blue};
  margin: 0 10px;
  font-size: 1.5em;
  
  &:hover {
    color: #21a1f1;
  }
`;

export const FooterAssociation = styled.div`
  display: flex;
  align-items: flex-start;
    flex-direction: column;
        gap: 1rem; 
`;

export const AssociationLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const AssociationName = styled.span`
  font-size: ${theme.fontSizes.small};
`;

export const AsociationLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
