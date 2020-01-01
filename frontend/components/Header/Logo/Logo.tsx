import * as React from 'react';
import LogoText from './LogoText';
import { ActiveLink } from '../../ActiveLink';

export const Logo = () => (
    <LogoText>
        <ActiveLink activeClassName="active" href="/">
            <a>Krzywczyce</a>
        </ActiveLink>
    </LogoText>
);