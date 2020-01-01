import * as React from 'react';
import Wrapper from './Wrapper';
import FooterText from './FooterText';
import { FooterSocial } from './FooterSocial/FooterSocial';

interface FooterProps {

}

export const Footer: React.SFC<FooterProps> = (props) => (
    <Wrapper>
        <FooterText>&copy; Krzywczyce.pl</FooterText>
        <FooterSocial />
    </Wrapper>
);