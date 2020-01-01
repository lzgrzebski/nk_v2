import styled from 'styled-components';

interface ButtonProps {
    isBtnVisible: boolean;
}

export default styled.div`
    padding: 10px 12px;
    text-align: center;
    border-radius: 5px;
    outline: none;
    border: 1px solid #d2d2d2;
    background: #fff;
    position: absolute;
    right: 10px;
    margin-left: 10px;
    color: #a5a5a5;
    display: flex;
    cursor: pointer;
    opacity: ${ ({isBtnVisible}: ButtonProps) => isBtnVisible ? 1 : 0 };
    transition: opacity 0.3s ease-in-out;
    will-change: opacity;

    @media screen and (min-width: 1415px) {
        left: 100%;
        right: auto;
    }

    svg {
        width: 20px;
        height: 18px;
    }
`;
