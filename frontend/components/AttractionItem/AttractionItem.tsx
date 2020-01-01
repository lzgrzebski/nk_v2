import * as React from 'react';
import AttractionItemWrapper from './AttractionItemWrapper';
import { Button } from '../Button';
import { TextField } from '../TextField';
import AttractionItemPhoto from './AttractionItemPhoto';
import { Photo } from '../Photo';

interface AttractionItemProps {
    title: string;
    image: {
        url: string;
    };
    description?: string;
    link?: string;
}

const AttractionItem: React.SFC<AttractionItemProps> = ({title, description, image, link}) => (
    <AttractionItemWrapper>
        <AttractionItemPhoto>
            <Photo
                path={image.url}
                ratio={270 / 450}
            />
        </AttractionItemPhoto>
        <div>
            <TextField bold padding="0" margin="-2px 0 0 0">
                {title}
            </TextField>
            <TextField padding="0">
                {description}
            </TextField>
            {link && (
                <Button>
                    <a
                        href={link}
                        target="_blank"
                    >
                        Więcej informacji
                    </a>
                </Button>
            )}
        </div>
    </AttractionItemWrapper>
);

AttractionItem.defaultProps = {
    description: ''
};

// tslint:disable-next-line:align
export { AttractionItem };

export default AttractionItem;