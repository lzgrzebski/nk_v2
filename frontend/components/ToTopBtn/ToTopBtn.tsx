import * as React from 'react';
import Wrapper from './Wrapper';
import Button from './Button';

interface ToTopBtnProps {
    offset: number;
}

interface ToTopBtnState {
    isBtnVisible: boolean;
}

export class ToTopBtn extends React.Component<ToTopBtnProps, ToTopBtnState> {

    static defaultProps: ToTopBtnProps = {
        offset: 30
    };

    state = {
        isBtnVisible: false,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > this.props.offset) {
            this.setState({isBtnVisible: true});
        } else {
            this.setState({isBtnVisible: false});
        }
    }

    handleClick = () => {
        const start = document.body.scrollTop || document.documentElement.scrollTop ;
        const change = -start;
        const increment = 20;
        const duration = 1000;
        let currentTime = 0;
    
        const animateScroll = (() => {
    
          currentTime += increment;
    
          const val = this.easeInOutQuad(currentTime, start, change, duration);

          document.body.scrollTop = val;
          document.documentElement.scrollTop = val;
    
          if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
          }
        });
    
        requestAnimationFrame(animateScroll);

    }

    easeInOutQuad(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) { return  c / 2 * t * t + b; }
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    render() {
        return (
            <Wrapper>
                <Button onClick={this.handleClick} isBtnVisible={this.state.isBtnVisible}>
                    <svg>
                        <use xlinkHref="#chevron-up" />
                    </svg>
                </Button>
            </Wrapper>
        );
    }
}