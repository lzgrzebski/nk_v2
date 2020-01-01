import { toPercentage } from '../../globalStyles/utils/toPercentage';
import styled from 'styled-components';
import { styleVariables } from './../../globalStyles/variables';

export default styled.div`
    min-width: ${ toPercentage(styleVariables.sizes.listingPhotoSize) };
    margin-right: ${ toPercentage(styleVariables.sizes.listingPhotoMarginSize) };
`;