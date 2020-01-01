import { fluidType } from './utils/fluidType';
import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { styleVariables } from './variables';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
        font-family: ${styleVariables.fonts.sansSerif};
    }

    html,
    body {
        ${fluidType(
            styleVariables.sizes.minWidth,
            styleVariables.sizes.maxWidth,
            styleVariables.sizes.minFont,
            styleVariables.sizes.maxFont
        )}
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body,
    h1, h2, h3, h4, h5, h6,
    blockquote, p, pre,
    dl, dd, ol, ul,
    figure,
    hr,
    fieldset, legend {
        margin:  0;
        padding: 0;
    }

    li > {
        ol,
        ul {
            margin-bottom: 0;
        }
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    fieldset {
        min-width: 0;
        border: 0;
    }

    iframe {
        border: 0;
        width: 100%;
        height: 350px;
        background: #f2f2f2;
    }
`;