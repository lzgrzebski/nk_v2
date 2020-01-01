import styled, { css } from 'styled-components';
import { ContentContainer } from '../ContentContainer';
import { from } from '../../globalStyles/utils/from';

export default styled(ContentContainer)`
    flex-direction: column-reverse;
    ${from('tablet')(css`
        flex-direction: row;
        min-height: 717px;
    `)}
`;
