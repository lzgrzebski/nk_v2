import React from 'react';
import Link from 'next/link';
 
import Query from '../../components/query';
import { POSTS_QUERY } from '../../utils/queries';
import { ContentContainer } from '../../components/ContentContainer';
import { Headline } from '../../components/Headline';
import { Photo } from '../../components/Photo';
import ImageWrapper from '../../components/Photo/ImageWrapper';
import { TextField } from '../../components/TextField';
import TextWrapper from '../../components/TextField/TextWrapper';
import { Button } from '../../components/Button';

export default () => (
    <Query query={POSTS_QUERY} id={undefined}>
        {
            ({ posts }) => posts.map((post) => (
                <React.Fragment key={'post-' + post.id}>
                    <ContentContainer direction="column">
                            <Headline>{ post.title }</Headline>
                            {post.cover && (
                                <ImageWrapper padding="15px 0 0">
                                    <Photo
                                        path={post.cover.url}
                                        ratio={ 6 / 16 }
                                    />
                                </ImageWrapper>
                            )}
                            <TextWrapper>
                                <TextField padding={'15px 0 0'}>{ post.shorttext } </TextField>
                                {post.text && (
                                    <Button>
                                        <Link
                                            href="/posts/[id]"
                                            as={'/posts/' + post.id}
                                        >
                                            <a>Czytaj dalej</a>
                                        </Link>
                                    </Button>
                                )}
                        </TextWrapper>
                    </ContentContainer>
                </React.Fragment>
            )) 
        }
    </Query>
);