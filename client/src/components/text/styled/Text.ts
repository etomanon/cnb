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
