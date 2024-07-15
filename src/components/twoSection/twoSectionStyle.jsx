import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper =styled.div`

width: 100%;
padding: 1rem 0;
display: flex;
min-width: 300px;
background-color: ${theme.colors.secondary};
color: ${theme.colors.text};
`
export const Subtitle = styled.h2`
font-size: ${theme.fontSizes.large};
`
export const Wrapp = styled.div`
margin: 0 2rem;
display: flex;
    flex-direction: column;
    width: 50%;
    row-gap: 1rem;
    justify-content: center;
`
export const TextContainer = styled.div`
display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;

`
export const TextBox = styled.div`
display: flex;
flex-direction: column;
width: 28%;
min-width: 280px;
min-height: 150px;
row-gap: 1rem;
justify-content: space-around;
`
export const Underline = styled.div`
width: 100%;
height: 6px;
border-radius: 3px;
background-color: ${theme.colors.accent};
`