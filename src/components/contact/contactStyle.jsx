import styled from "styled-components";
import theme from "../../styles/theme";
import { motion } from 'framer-motion'
import { mobile } from '../../util/responsive';

export const Formulario = styled.form`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const LabelAnimate = styled(motion.label)`
  position: absolute;
  left: 10px;
  top: ${({ isFocused }) => (isFocused ? "-10px" : "10px")};
  background-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.blue : theme.colors.background};
  padding: 0 5px;
  transition: all 0.3s ease;
  pointer-events: none;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ isFocused }) => (isFocused ? "12px" : "16px")};
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  min-height: 150px;
`;

export const Wrapp = styled.div`
  width: 70%;
  align-items: center;
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 2rem;
  ${mobile({ width: "90%" })}
`;

/* export const Button = styled(GlobalButton)`
  background-color: ${theme.colors.blue};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`; */