import React from 'react';
import ReactMarkdown from "react-markdown";  
import Query from '../components/query';
import { PAGE_QUERY } from '../utils/queries';
import { ContentContainer } from '../components/ContentContainer';
import { Headline } from '../components/Headline';
import { TextField } from '../components/TextField';
import { FooterSocial } from '../components/Footer/FooterSocial/FooterSocial';
import ContactContent from '../components/Contact/ContactContent';
import ContactSocialWrapper from '../components/Contact/ContactSocialWrapper';
import ContactMap from '../components/Contact/ContactMap';
import { Photo } from '../components/Photo';
import ContactWrapper from '../components/Contact/ContactWrapper';
import { ParagraphMarkdownRenderer } from '../utils/markdown-renderers';

export default () => (
    <Query query={PAGE_QUERY} id={4}>
        {
            ({ page }) => (
                <>
                    <iframe src="https://maps.google.com/maps?width=1270&amp;height=350&amp;hl=en&amp;q=Krzywczyce+(Tytu%C5%82)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe>
                    <ContentContainer>
                        <Headline>{ page.Title }</Headline>
                    </ContentContainer>
                    <ContactWrapper>
                        <ContactContent>
                            <ReactMarkdown
                                source={page.Page_components[0].text}
                                renderers={{
                                    paragraph: ParagraphMarkdownRenderer
                                }}
                            ></ReactMarkdown>
                            <ContactSocialWrapper>
                                <FooterSocial />
                            </ContactSocialWrapper>
                        </ContactContent>
                        <ContactMap>
                            <Photo path={page.Page_components[1].image.url} ratio={405 / 608} />
                        </ContactMap>
                    </ContactWrapper>
                </>
            )
        }
    </Query>
);