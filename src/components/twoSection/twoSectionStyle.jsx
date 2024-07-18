import styled from "styled-components";
import theme from "../../styles/theme";
import { mobile, tablet } from "../../util/responsive";

export const Wrapper =styled.div`

width: 100%;
padding: 1rem 0;
display: flex;
min-width: 300px;
background-color: ${theme.colors.secondary};
color: ${theme.colors.text};

${tablet({
    position: 'relative',
    top: '10px',
    flexDirection: 'column',
    padding:' 4rem 0',
    gap: '1rem',
})}
`
export const WrapperDescription = styled.div`
widht: fit-content;
background-color: ${theme.colors.accent};
padding: ${theme.spacing.xlarge};
border-radius: 1rem;
`
export const Subtitle = styled.h2`
font-size: ${theme.fontSizes.xlarge};
${mobile({
    fontSize: `${theme.fontSizes.medium}`,
    TextWrapp: 'balance',
})}
`
export const Wrapp = styled.div`
margin: 0 2rem;
display: flex;
    flex-direction: column;
    width: 50%;
    row-gap: 1rem;
    justify-content: center;

${tablet({
    width: '100%',
    padding: '0 .5rem',
    margin:'0',
})}
`
export const TextContainer = styled.div`
display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    ${mobile({
        gap: '1rem',
    })}

`
export const TextBox = styled.div`
display: flex;
flex-direction: column;
width: 28%;
min-width: 280px;
min-height: 150px;
row-gap: 1rem;
justify-content: space-around;
${tablet({
    textAlign: 'center',
    width: '55%',
    padding:'0 .5rem',
})}
${mobile({
    textAlign: 'center',
    width: '100%',
    padding:'0 .5rem',
})}
`
export const Underline = styled.div`
width: 100%;
height: 6px;
border-radius: 3px;
background-color: ${theme.colors.accent};
`