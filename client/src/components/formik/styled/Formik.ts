import { SpaceProps, space } from "styled-system";
import styled from "styled-components";

export const Label = styled.label`
  display: block;
  font-size: 1.8rem;
`;

export const Input = styled.input`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Submit = styled.button<SpaceProps>`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  background: #fff;
  color: ${({ theme }) => theme.colors.primary};
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  ${space}
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
  &:focus {
    outline: 0;
  }
`;
