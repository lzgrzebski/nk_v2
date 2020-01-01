import { fontSize } from '../../globalStyles/utils/fontSize';
import styled from 'styled-components';
import { styleVariables } from '../../globalStyles/variables';

interface ParagraphProps {
    bold?: boolean;
    padding?: string;
    margin?: string;
}

export default styled.p`
    ${ (p: ParagraphProps) => p.bold ? fontSize(24) :  fontSize(19) }
    line-height: 1.7;
    color: ${ (p: ParagraphProps) => p.bold ? '#333' :  '#888' };
    font-weight: ${ (p: ParagraphProps) => p.bold ? '700' :  '400' };
    padding: ${ (p: ParagraphProps) => p.padding ? p.padding :  '15px 0' };
    margin: ${ (p: ParagraphProps) => p.margin ? p.margin :  '0' };

    b, strong {
        color: #333;
    }

    a {
        color: ${ styleVariables.colors.primary };
        text-decoration: none;

        &:hover {
            color: ${ styleVariables.colors.primary };
        }
    }
`;