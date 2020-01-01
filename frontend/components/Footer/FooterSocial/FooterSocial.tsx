import * as React from 'react';
import FooterSocialLink from './FooterSocialLink';
import FooterSocialWrapper from './FooterSocialWrapper';

interface FooterProps {

}

export const FooterSocial: React.SFC<FooterProps> = (props) => (
    <FooterSocialWrapper>
        <FooterSocialLink href="https://www.facebook.com/nasze.krzywczyce/" target="_blank">
            <svg><use xlinkHref="#fb-icon" /></svg>
        </FooterSocialLink>
        <FooterSocialLink href="https://www.youtube.com/channel/UC8F3eueFXQG4yizbRUYWgdg" target="_blank">
            <svg style={{position: 'relative', top: '1px'}}><use xlinkHref="#yt-icon"/></svg>
        </FooterSocialLink>
    </FooterSocialWrapper>
);