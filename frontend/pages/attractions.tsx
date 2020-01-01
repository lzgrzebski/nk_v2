import React from 'react';
import Query from '../components/query';
import { PAGE_QUERY } from '../utils/queries';
import { ContentContainer } from '../components/ContentContainer';
import { Headline } from '../components/Headline';
import { AttractionItem } from '../components/AttractionItem';
import ReactMarkdown from 'react-markdown';
import TextWrapper from '../components/TextField/TextWrapper';
import { ParagraphMarkdownRenderer, ListMarkdownRenderer, ListItemMarkdownRenderer } from '../utils/markdown-renderers';
import { AttractionSmallItem } from '../components/AttractionSmallItem';
import Button from '../components/Button/Button';

export default () => (
    <Query query={PAGE_QUERY} id={2}>
        {
            ({ page }) => (
                <>
                    <ContentContainer>
                        <Headline>{ page.Title }</Headline>
                    </ContentContainer>
                    {
                        page.Page_components.map((c, i) => {
                            switch(c.__typename) {
                                case 'ComponentPlacesP':
                                    return (
                                        <ContentContainer key={c.__typename + i} direction="column">
                                            {c.places.map(attraction => <AttractionItem key={attraction.title} {...attraction} />)}
                                        </ContentContainer>
                                    )
                                case 'ComponentHeaderHeader':
                                    return (
                                        <ContentContainer key={c.__typename + i}>
                                            <Headline>{c.title}</Headline>
                                        </ContentContainer>
                                    )

                                case 'ComponentTextText':
                                    return (
                                        <ContentContainer key={c.__typename + i}>
                                            <TextWrapper>
                                                <ReactMarkdown
                                                    source={c.text}
                                                    renderers={{
                                                        paragraph: ParagraphMarkdownRenderer,
                                                        list: ListMarkdownRenderer,
                                                        listItem: ListItemMarkdownRenderer
                                                    }}
                                                ></ReactMarkdown>
                                            </TextWrapper>
                                        </ContentContainer>
                                    )
                                case 'ComponentOtherPlacesOtherPlaces':
                                    return (
                                        <ContentContainer flexWrap key={c.__typename + i}>
                                            {c.other_places.map(attraction => <AttractionSmallItem key={attraction.title} {...attraction} />)}
                                        </ContentContainer>
                                    )
                            }
                        })
                    }
                    <ContentContainer center margin="40px auto">
                        <Button invert main>
                            <a
                                href="https://www.google.com/maps/d/embed?mid=1MY6YyhpPiSo3c4d72yMiaOtkkew&hl=pl"
                                target="_blank"
                            >
                                Zobacz na mapie
                            </a>
                        </Button>
                    </ContentContainer>
                </>
            )
        }
    </Query>
);