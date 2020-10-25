import React from 'react';
import ReactMarkdown from "react-markdown";  
import Query from '../components/query';
import { PAGE_QUERY } from '../utils/queries';
import { ContentContainer } from '../components/ContentContainer';
import { Headline } from '../components/Headline';
import { imagePreprocessor, FullParagraphMarkdownRenderer, FullTextMarkdownRenderer, ImageMarkdownRenderer, LinkRenderer } from '../utils/markdown-renderers';

export default () => (
    <Query query={PAGE_QUERY} id={1}>
        {
            ({ page }) => (
                <>
                    <ContentContainer>
                        <Headline>{ page.Title }</Headline>
                    </ContentContainer>
                    <ContentContainer direction="column">
                        { page.Page_components.map((c, i) => {
                            c.text = imagePreprocessor(c.text);
                            return (
                                <ReactMarkdown
                                    key={i}
                                    source={c.text}
                                    renderers={{
                                        paragraph: FullParagraphMarkdownRenderer,
                                        text: FullTextMarkdownRenderer,
                                        image: ImageMarkdownRenderer,
                                        link: LinkRenderer
                                    }}
                                ></ReactMarkdown>
                            )
                        })}
                    </ContentContainer>
                </>
            )
        }
    </Query>
);