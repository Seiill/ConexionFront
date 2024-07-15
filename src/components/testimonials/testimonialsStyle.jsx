import styled from "styled-components";
import theme from "../../styles/theme";
export const Wrapper = styled.section`
width: 100%;
background-color: #9fcfff;
padding: 4rem 0;
color: ${theme.colors.primary};
`
export const Wrapp = styled.div`
margin: 0 2rem;
display: flex;
justify-content: center;
align-items: center;
`
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
`
export const DescContainer = styled.div`
background-color: ${theme.colors.light};
width: 72%;
min-height: 30%;
padding: 0 ${theme.spacing.medium};
padding: 1rem 0.5rem;
`
/* export const RowButton = styled.button`
margin: 2rem;
position: relative;
left: 50%;
font-size: ${theme.fontSizes.medium};
color: ${theme.colors.accent}; 
display: inline-block;
line-height: 1;
text-align: center;
padding: ${theme.spacing.small};
` */
