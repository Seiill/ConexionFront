import styled from 'styled-components';
import theme from '../../styles/theme';
import { mobile, tablet } from '../../util/responsive';
export const BenefitsFlex = styled.div`
  display: flex;
  width: 100%;
  margin: ${theme.spacing.large} 0;
  color: ${theme.colors.primary};
justify-content: center;
  &.split-70-30 > div:first-child {
    flex: 0 0 63%;
  }

  &.split-70-30 > div:last-child {
    flex: 0 0 30%;
  }

  &.split-equal > div {
    flex: 1;
  }
  ${tablet({
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
gap: '1rem',
width: '90%',
margin: 'auto',
  })}
  ${mobile({
width: '100%',
padding: '0 1rem',
  })}
`;

export const BenefitsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: ${theme.spacing.medium};
  text-align: center;
  ${tablet({
    width: '100%',
    gap: '2rem 1.5rem',
  })}
  ${mobile({
    gap: '1.5rem',
  })}
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: circle;
    align-items: flex-start;
    text-align: left;
    row-gap: ${theme.spacing.xlarge};
    ${mobile({
     paddingLeft: '1rem', 
    })}
    
`;
export const Li = styled.li`
font-size:${theme.fontSizes.small};
font-weight: ${theme.fontWeight.small};
`;
