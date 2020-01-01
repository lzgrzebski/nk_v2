import { css, Interpolation } from 'styled-components';
import { styleVariables } from '../variables';

export const from = (breakpoint: string) => {
    const breakpointPx = styleVariables.sizes.breakpoints[breakpoint];
    const ems = breakpointPx / 16;
    return <P>(args: Interpolation<P>) => css`@media (min-width: ${ems}em) {
      ${args}
    }`;
  };
