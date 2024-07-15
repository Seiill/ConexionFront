import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
color: ${({ theme }) => theme.colors.primary};
`
export const Title = styled.h1`
font-size: ${theme.fontSizes.xlarge};
text-align: center;
`
export const Subtitle = styled.h3`
  font-size: ${theme.fontSizes.medium};
  margin-bottom: 10px;
  text-wrap: balance;
`;
export const ImageWrapp = styled.div`
width: 100%;
`

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.3rem 1.8rem;
  width: 100%;
  padding: 20px 0;
`;
export const ServicesCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: ${theme.spacing.medium};
text-align: center;
min-height: 200px;
`;