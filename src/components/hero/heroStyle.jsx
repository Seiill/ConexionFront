import styled from "styled-components";
import theme from "../../styles/theme";
export const Wrapper =styled.div`
width: 100%;
padding: 2rem 0;
display: flex;
min-width: 300px;
background-color: ${theme.colors.primary};
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
color: ${theme.colors.light};
padding-left: 3rem;
gap: 2rem;
`
export const ImageContainer = styled.div`
position: relative;
top: 65px;
width: 50%;
padding-right: 3rem;
`
export const Title = styled.h1`
font-size:${theme.fontSizes.xlarge} ;
`


