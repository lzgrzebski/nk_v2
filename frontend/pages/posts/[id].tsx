import { useRouter } from 'next/router';

import Query from '../../components/query';
import { POST_QUERY } from '../../utils/queries';
import { Headline } from '../../components/Headline';
import { ContentContainer } from '../../components/ContentContainer';
import ImageWrapper from '../../components/Photo/ImageWrapper';
import { Photo } from '../../components/Photo';
import TextWrapper from '../../components/TextField/TextWrapper';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ParagraphMarkdownRenderer } from '../../utils/markdown-renderers';
import { Button } from '../../components/Button';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const normalizedId = parseInt(id?.toString()) || 1;

    return (
        <Query query={POST_QUERY} id={normalizedId}>
            {
                ({post}) => (
                    <>
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
                                <ReactMarkdown
                                    source={post.text}
                                    renderers={{
                                        paragraph: ParagraphMarkdownRenderer,
                                    }}
                                ></ReactMarkdown>
                            </TextWrapper>
                        </ContentContainer>
                        <ContentContainer center margin="40px auto">
                            <Button invert main><Link href="/posts"><a>Zobacz pozostałe działania</a></Link></Button>
                        </ContentContainer>
                    </>
                )
            }
        </Query>
    )
}

export default Post;