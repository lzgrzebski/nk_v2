import * as React from 'react';
import Wrapper from './Wrapper';
import Container from './Container';
import { Logo } from './Logo';
import { Menu } from './Menu/Menu';

export const Header = () => (
    <Wrapper>
        <Container>
            <Logo />
            <Menu />
        </Container>
    </Wrapper>
);