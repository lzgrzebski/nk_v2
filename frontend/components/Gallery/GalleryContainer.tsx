import { ContentContainer } from "../ContentContainer";
import { SubHeadline } from "../SubHeadline";
import GalleryGrid from "./GalleryGrid";
import GalleryItem from "./GalleryItem";
import { Photo } from "../Photo";
import { useState } from "react";

const GalleryContainer = (props) => {
    const [isOpen, setOpen] = useState(props.title ? false : true);
    const ratio = props.size.split('x').reduce((prev, curr) => curr / prev);

    function handleClick(e) {
        e.preventDefault();
        setOpen(!isOpen);
    }

    return (
        <>
            {props.title && (
                <ContentContainer>
                    <SubHeadline onClick={handleClick}>{props.title}</SubHeadline>
                </ContentContainer>
            )}
            {isOpen && (
                <GalleryGrid>
                    { props.images.map(image => (
                        <GalleryItem grid={props.columns} key={image.url}>
                            <Photo
                                path={image.url}
                                ratio={ratio}
                            />
                        </GalleryItem>                                
                    ))}
                </GalleryGrid>
            )}
        </>
    );

}

export default GalleryContainer;