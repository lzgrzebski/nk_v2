import styled, { css } from 'styled-components';
import { from } from '../../globalStyles/utils/from';

export default styled.div`
    width: 100%;

    ${from('tablet')(css`
        max-width: 41%;
    `)}
`;
