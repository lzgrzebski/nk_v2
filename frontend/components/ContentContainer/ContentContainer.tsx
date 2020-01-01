import styled from 'styled-components';
import { styleVariables } from './../../globalStyles/variables';

interface ContentContainerProps {
    direction?: string;
    margin?: string;
    center?: boolean;
    flexWrap?: boolean;
}

export default styled.div`
    display:flex;
    flex-direction: ${ (p: ContentContainerProps) => p.direction ? p.direction :  'row' };
    width: 100%;
    max-width: ${ styleVariables.sizes.contentWrapper }px;
    margin: ${ (p: ContentContainerProps) => p.margin ? p.margin :  '20px auto' };
    position: relative;

    padding-left: 15px;
    padding-right: 15px;

    ${ (p: ContentContainerProps) => p.center ? `justify-content: center` : ''};
    ${ (p: ContentContainerProps) => p.flexWrap ? `flex-wrap: wrap` : ''};

    > div:first-child > div > p {
        padding-top: 0;
    }
`;