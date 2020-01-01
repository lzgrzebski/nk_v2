import { css } from 'styled-components';
import { styleVariables } from '../variables';

export const fontSize = (pixels: number, context = styleVariables.sizes.maxFont) => css`
    font-size: ${ pixels / context }rem;
`;

export default fontSize;