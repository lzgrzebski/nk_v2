import styled from 'styled-components';
import { fontSize } from '../../globalStyles/utils/fontSize';

export default styled.li`
    ${ fontSize(19)};
    line-height: 1.7;
    color: #888;
    position: relative;
    &:before {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        content: "";
        background: #333;
        display:inline-block;
        vertical-align: 11%;
        margin-right: 15px;
    }
`;