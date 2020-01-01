import { fontSize } from '../../globalStyles/utils/fontSize';
import { from } from '../../globalStyles/utils/from';
import styled, { css } from 'styled-components';
import { styleVariables } from './../../globalStyles/variables';

interface ButtonProps {
    invert?: boolean;
    main?: boolean;
}

export default styled.div`
    font-size: 16px;
    ${ fontSize(16) };
    line-height: 25px;
    display: inline-block;
    /* padding: 1rem 2rem; */
    padding: 16px 32px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    border-radius: 3px;
    outline: none;
    margin-top:15px;
    width: 100%;

    background: ${ (p: ButtonProps) => p.invert ? '#fff' :  styleVariables.colors.primary };
    color: ${ (p: ButtonProps) => p.invert ? styleVariables.colors.primary :  '#fff' };
    border: ${ (p: ButtonProps) => p.invert ? `1px solid ${styleVariables.colors.primary}` :  'none' };

    ${from('tablet')(css`

        ${ (p: ButtonProps) => p.main ? (
            css`
                width: 100%;
                max-width: 400px;
            `
        ) :  css`width: auto;` };

    `)}

    a {
        display: block;
        color: ${ (p: ButtonProps) => p.invert ? styleVariables.colors.primary :  '#fff' };
        text-decoration: none;
    }
`;
