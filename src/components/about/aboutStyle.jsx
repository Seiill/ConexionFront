import styled from "styled-components";
import theme from "../../styles/theme";
export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
padding: 2rem 0;
gap: 2rem;
justify-content: center;
background-color: ${theme.colors.secondary};

`
export const ImageContainer = styled.div`
 width: 45%;
min-width: 300px
`
export const TextContainer = styled.div`
    width: 45%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Subtitle  = styled.h3`
width: fit-content;
font-size: ${theme.fontSizes.medium};
padding: ${theme.spacing.medium} 0;
color: ${theme.colors.accent};
background-color: ${theme.colors.blue};
padding:1rem 2rem 1rem .4rem;
border-radius: 10px;
`
export const TextWrapp = styled.div`
display: flex;
    gap: 16px;
    color: ${theme.colors.primary};
    flex-direction: column; 
`