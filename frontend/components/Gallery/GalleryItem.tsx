import styled from 'styled-components';

interface GalleryItemProps {
    grid?: number;
}

const offset = 1.2;
export default styled.div`
    width: ${ (p: GalleryItemProps) => p.grid ? 100 / p.grid - offset :  '49.033' }%;
    margin-bottom: 25px;
`;