import styled from 'styled-components';
import theme from '../../styles/theme';

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
`;

export const BenefitsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: ${theme.spacing.medium};
  text-align: center;
`;

export const Ul = styled.ul`
display: flex;
    row-gap: ${theme.spacing.xlarge};
    flex-direction: column;
    list-style: circle;
    align-items: flex-start;
    text-align: left;
    display: flex;
    flex-direction: column;
    list-style: circle;
    align-items: flex-start;
    text-align: left;
`;
export const Li = styled.li`
font-size:${theme.fontSizes.small};
font-weight: ${theme.fontWeight.small};
`;
