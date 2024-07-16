import styled from "styled-components";
import theme from "../../styles/theme";
import { motion } from 'framer-motion';
import { mobile, tablet } from "../../util/responsive";
export const Wrapper = styled.section`
width: 100%;
background-color: #9fcfff;
padding: 4rem 0;
color: ${theme.colors.primary};
${tablet({padding:'1.5rem',})}
`
export const Wrapp = styled.div`
margin: 0 2rem;
display: flex;
justify-content: center;
align-items: center;
${tablet({flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 0',
margin: '0',})}

`
export const AnimatedWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  ${tablet({
    width: '98%',
    flexDirection:'column',
    gap: '2rem',
  })}
`;
export const TextContainer = styled.div`
display: flex;
padding-left: 1.2rem;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 2rem;
color: ${theme.colors.primary};
width: 549.64px;
height: 335px;
background-color: ${theme.colors.secondary};
clip-path: path("M465.5,167c0-62.6,24.46-120.69,84.14-165.11V0H0V335H549.64v-4.39C490,286.18,465.5,229.6,465.5,167Z");
${tablet({
    height:"100%",
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 .2rem',
    clipPath: 'none',
})}
`
export const ImageContainer = styled.div`
width: 390px;
height: 390px;
background-color: ${theme.colors.primary};
clip-path: circle(50%);
display: flex;
align-items: center;
justify-content: center;
position: relative;
z-index: 3;
right: 60px;
${tablet({
    width: '250px',
    height: '250px',
    right: '0'
})}
`
export const Circle = styled.div`
width: 350px;
height: 350px;
clip-path: circle(50%);
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
`
export const TitleTest = styled.h2`
font-size: ${theme.fontSizes.large};
`
export const Subtitle = styled.h4`
font-size: ${theme.fontSizes.medium};
font-weight: ${theme.fontWeight.medium};
${mobile({
    textAlign: 'center',
})}
`
export const DescContainer = styled.div`
background-color: ${theme.colors.light};
width: 72%;
min-height: 30%;
padding: 0 ${theme.spacing.medium};
padding: 1rem 0.5rem;
${mobile({
    width: '90%',
})}
`