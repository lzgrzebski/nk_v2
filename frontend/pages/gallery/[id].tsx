import { useRouter } from 'next/router';

import Query from '../../components/query';
import { GALLERY_QUERY } from '../../utils/queries';
import { Headline } from '../../components/Headline';
import { GalleryTabs } from '../../components/Gallery/GalleryTabs';
import { Container } from '../../components/Header';
import GalleryContainer from '../../components/Gallery/GalleryContainer';

const Gallery = () => {
    const router = useRouter();
    const { id } = router.query;
    const normalizedId = parseInt(id?.toString()) || 1;

    return (
        <Query query={GALLERY_QUERY} id={normalizedId}>
            {
                (props) => (
                    <>
                        <Container>
                            <Headline>{ 'Galeria' }</Headline>
                            <GalleryTabs galleries={props.galleries} id={normalizedId} />
                        </Container>
                        {
                            props?.gallery?.images.map((image, i) => <GalleryContainer key={i} {...image} />)
                        }
                    </>
                )
            }
        </Query>
    )
}

export default Gallery;