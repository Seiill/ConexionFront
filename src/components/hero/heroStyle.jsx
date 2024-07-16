import styled from "styled-components";
import theme from "../../styles/theme";
import { mobile, tablet } from "../../util/responsive";
export const Wrapper =styled.div`
width: 100%;
padding: 2rem 0;
display: flex;
min-width: 300px;
background-color: ${theme.colors.primary};
${tablet({
    flexDirection: 'column',
    top: '60px',
    position: 'relative',
})}
`


export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
color: ${theme.colors.light};
padding-left: 3rem;
gap: 2rem;

${tablet({
    width: '100%',
    padding: '0 .5rem',
    alignItems: 'center',
    textAlign: 'center',
})}
`
export const ImageContainer = styled.div`
position: relative;
top: 65px;
width: 50%;
padding-right: 3rem;
${tablet({
    width: '90%',
    padding: '1rem 0',
    margin: 'auto',
    top: '0',

})}
`
export const Title = styled.h1`
font-size:${theme.fontSizes.xlarge} ;
${mobile({
    fontSize:`${theme.fontSizes.medium}`
})}
`


