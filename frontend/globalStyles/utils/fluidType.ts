import { css } from 'styled-components';

export const fluidType = (minWidth: number, maxWidth: number, minFont: number, maxFont: number) => css`
    font-size: ${minFont}px;

    @media screen and (min-width: ${minWidth}px) {
        font-size: calc(
            ${minFont}px + ${maxFont - minFont} * ((100vw - ${minWidth}px) / ${maxWidth - minWidth}));
    }
    @media screen and (min-width: ${maxWidth}px) {
        font-size: ${maxFont}px;
    }

`;

export default fluidType;