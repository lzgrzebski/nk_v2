import styled from 'styled-components';

interface PhotoElementProps {
    loaded?: boolean;
    src?: string;
}

export default styled.img`
    display: block;

    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    transition: opacity 0.3s ease-in-out;
    will-change: opacity;

    border-radius: 3px;

    opacity: ${ (p: PhotoElementProps) => p.loaded ? 1 : 0 };

`;