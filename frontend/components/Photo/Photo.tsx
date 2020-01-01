import * as React from 'react';
import PhotoWrapper from './PhotoWrapper';
import PhotoElement from './PhotoElement';

interface PhotoProps {
    ratio?: number;
    path?: string;
    isAbsolute?: boolean;
}

interface PhotoState {
    loaded: boolean;
}

export class Photo extends React.Component<PhotoProps, PhotoState> {

    state = {
        loaded: false,
    };

    image = React.createRef<HTMLImageElement>();

    componentDidMount() {
        const img = this.image.current;
        if (img && img.complete) {
            this.handleLoad();
        }
    }
 
    handleLoad = () => {
        this.setState({ loaded: true });
    }

    render() {
        return (
            <PhotoWrapper ratio={this.props.ratio}>
            { this.props.path &&  (
                <PhotoElement
                    ref={this.image}
                    src={ (this.props.isAbsolute ? '' : process.env.API_URL) + this.props.path}
                    onLoad={this.handleLoad}
                    loaded={this.state.loaded}
                />
            )}
            </PhotoWrapper>
        );
    }
}
