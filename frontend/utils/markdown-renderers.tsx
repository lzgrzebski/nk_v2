import TextWrapper from "../components/TextField/TextWrapper";
import { TextField } from "../components/TextField";
import { createElement } from "react";
import ImageWrapper from "../components/Photo/ImageWrapper";
import { Photo } from "../components/Photo";
import { List, ListItem } from "../components/List";

export const imageSizeRegex = /_33B2BF251EFD_([0-9]+x|x[0-9]+|[0-9]+x[0-9]+)$/;
export const imagePreprocessor = (source) => source.replace(/(!\[[^\]]*\]\([^)\s]+) =([0-9]+x|x[0-9]+|[0-9]+x[0-9]+)\)/g, '$1_33B2BF251EFD_$2)');

export const ImageMarkdownRenderer = ({src, ...props}) => {
    const match = imageSizeRegex.exec(src)

    if (!match) {
        return  (
            <ImageWrapper>
                <Photo
                    path={src}
                    isAbsolute={true}
                />
            </ImageWrapper>
        )
    }

    const [width, height] = match[1].split('x').map(s => s === '' ? undefined : Number(s))
    return  (
        <ImageWrapper>
            <Photo
                path={src.replace(imageSizeRegex, '')}
                ratio={height/width}
                isAbsolute={true}
            />
        </ImageWrapper>
    )
}

export const FullTextMarkdownRenderer = (children) => (
    <TextWrapper>
        <TextField
            padding={'25px 0'}
        >
            {children.value}
        </TextField>
    </TextWrapper>
)

export const FullParagraphMarkdownRenderer = (props) => {
    return createElement('div', props, props.children)
}

export const ParagraphMarkdownRenderer = (props) => {
    return createElement(TextField, props, props.children)
}

export const ListMarkdownRenderer = (props) => {
    return createElement(List, props, props.children)
}

export const ListItemMarkdownRenderer = (props) => {
    return createElement(ListItem, props, props.children)
}

export function LinkRenderer(props) {
    return <a href={props.href} target="_blank">{props.children}</a>
}