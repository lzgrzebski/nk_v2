import { styleVariables } from '../variables';

const {sizes: { contentWrapper, contentWrapperPaddingLeft, contentWrapperPaddingRight }} = styleVariables;
const wrapperSize = contentWrapper - ( contentWrapperPaddingLeft + contentWrapperPaddingRight );
export const toPercentage = (elementSize: number, wrapper = wrapperSize) => (
    elementSize / wrapper * 100 + '%'
);

export default toPercentage;
  