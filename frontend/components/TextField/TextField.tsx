import * as React from 'react';
import Paragraph from './Paragraph';

interface TextFieldProps {
    children: any;
    bold?: boolean;
    padding?: string;
    margin?: string;
}

export class TextField extends React.Component<TextFieldProps> {
    render() {
        const { children, bold, padding, margin } = this.props;
        return (
            <Paragraph
                bold={bold}
                padding={padding}
                margin={margin}
            >{children}</Paragraph>
        );
    }
}