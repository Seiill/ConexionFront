import {css} from "styled-components"

export const mobile = (props) => css`
  @media only screen and (max-width: 541px) {
    ${props}
  }
`;

export const tablet = (props) => css`
  @media only screen and (max-width: 820px) {
    ${props}
  }
`;