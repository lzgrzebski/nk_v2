import React from 'react';
import ReactMarkdown from "react-markdown";  
import Query from '../components/query';
import { PAGE_QUERY } from '../utils/queries';
import { ContentContainer } from '../components/ContentContainer';
import { Headline } from '../components/Headline';
import { ParagraphMarkdownRenderer } from '../utils/markdown-renderers';
import TopContentContainer from '../components/Home/TopContentContainer';
import TopWrapper from '../components/Home/TopWrapper';
import TopHeadline from '../components/Home/TopHeadline';
import Link from 'next/link';
import { Photo } from '../components/Photo';
import TopImageWrapper from '../components/Home/TopImageWrapper';
import { Button } from '../components/Button';

export default () => (
    <Query query={PAGE_QUERY} id={3}>
        {
            ({ page }) => (
                <>
                    <TopContentContainer>
                        <TopWrapper>
                            <TopHeadline>{page.Title}</TopHeadline>
                            <ReactMarkdown
                                source={page.Page_components[0].text}
                                renderers={{
                                    paragraph: ParagraphMarkdownRenderer
                                }}
                            ></ReactMarkdown>
                            <Button><Link href="/attractions"><a>{page.Page_components[1].title}</a></Link></Button>
                        </TopWrapper>
                        <TopImageWrapper>
                            <Photo path={page.Page_components[2].image.url} ratio={712 / 820} />
                        </TopImageWrapper>
                    </TopContentContainer>
                    <ContentContainer>
                        <Headline>{page.Page_components[3].title}</Headline>
                    </ContentContainer>
                    <ContentContainer>
                        <div style={{flex: 2, paddingRight: 20}}>
                            <Photo path={page.Page_components[4].image.url} />
                        </div>
                        <div style={{flex: 1}}>
                            <Photo ratio={1.2} path={page.Page_components[5].image.url} />
                        </div>
                    </ContentContainer>
                    <ContentContainer>
                        <div style={{flex: 1, paddingRight: 20}}>
                            <Photo path={page.Page_components[6].image.url} />
                        </div>
                        <div style={{flex: 1}}>
                            <Photo path={page.Page_components[7].image.url} />
                        </div>
                    </ContentContainer>
                    <ContentContainer center margin="40px auto">
                        <Button invert main><Link href="/gallery/[id]" as={page.Page_components[8].link}><a>{page.Page_components[8].title}</a></Link></Button>
                    </ContentContainer>
                </>
            )
        }
    </Query>
);