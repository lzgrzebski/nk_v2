import * as React from 'react';
import { Photo } from '../Photo';
import AttractionItemSmallWrapper from './AttractionItemSmallWrapper';
import { TextField } from '../TextField';

interface AttractionItemProps {
    title: string;
    image: {
        url: string
    };
}

export const AttractionSmallItem: React.SFC<AttractionItemProps> = ({title, image}) => (
    <AttractionItemSmallWrapper>
        <Photo
            path={image.url}

        />
        <TextField>
            {title}
        </TextField>
    </AttractionItemSmallWrapper>
);

export default AttractionSmallItem;