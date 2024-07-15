import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

export const GlobalStyle = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
`;
export const Container = styled(motion.section)`
width: 100%;
max-width: 1280px;
margin: 0 auto;
scroll-behavior: smooth;
`
export const Description = styled.p`
font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.small};
font-weight: ${({ fontWeight, theme }) => fontWeight || theme.fontWeight.small};
color: ${({ color }) => color || 'inherit'};
line-height: 1.4;
text-wrap: balance;

`
export const Button = styled.button`
position: relative;
background-color:  ${({ $bgColor, theme }) => $bgColor || theme.colors.accent};
color: ${({ theme }) => theme.colors.light};
font-size: ${({ theme }) => theme.fontSizes.small};
font-weight: ${({ theme }) => theme.fontWeight.medium};
padding: ${({ theme }) => theme.spacing.medium};
border-radius: ${({ theme }) => theme.borderRadius};
box-shadow: ${({ theme }) => theme.shadows.small};
width: fit-content;
cursor: pointer;
&:hover {
  background-color: ${({ $hColor, theme }) => $hColor || theme.colors.hover};
}
`;
export const ImageContainer = styled.div`
  width: ${({ width }) => width || '28%'};
  border-radius: ${({ borderRadius }) => borderRadius };
  height: ${({ height }) => height || 'auto'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
width: 100%;
object-fit: cover;
object-position: center;
`