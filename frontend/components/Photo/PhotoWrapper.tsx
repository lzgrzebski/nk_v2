import styled from 'styled-components';

interface PhotoWrapperProps {
    ratio?: number;
}

export default styled.div`
    display: block;
    padding-top: ${ (p: PhotoWrapperProps) => p.ratio ? p.ratio * 100 :  270 / 450 * 100 }%;
    background-color: #f2f2f2;
    border-radius: 3px;
    position: relative;
`;