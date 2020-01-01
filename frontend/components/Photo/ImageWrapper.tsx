import styled from 'styled-components';

export default styled.div`
    padding: ${ (p) => p.padding ? p.padding :  '0' };
    max-width: 920px;
`;
