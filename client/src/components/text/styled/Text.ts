import styled from "styled-components";
import {
  ColorProps,
  color,
  SpaceProps,
  space,
  DisplayProps,
  display
} from "styled-system";

export const Text = styled.div<ColorProps & SpaceProps & DisplayProps>`
  display: inline-block;
  ${display}
  white-space: nowrap;
  ${color};
  ${space};
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const SubHeader = styled.h2<SpaceProps>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin: 1rem 0 0 0;
  text-align: center;
  ${space}
`;
