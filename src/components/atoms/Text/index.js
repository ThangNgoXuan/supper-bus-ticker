import React from 'react';
import PropTypes from 'prop-types';
import mapModifiers from '../../../utils/functions';
import DOMPurify from 'dompurify';


const Size = [ '12x18', '14x18', '12x14', '14x32', '14x42', '16x24', '16x20', '16x18', '18x26','80x88', '30x32', '24x30', '28x32', "32x48", "22x52", "22x32", "52x68", "16x42", "15x42", "24x34", "32x46"];
export const FontFamily = ['fontRoboto', 'fontLato'];
export const FontWeight = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
export const TextStyle = ['uppercase','capitalize','underline','italic','center','justify', 'left', 'right'];
export const ColorStyle = ['black', 'red', 'white', 'spanishGray', 'electricCrimson', 'coolBlack', 'davysGrey', 'raisinBlack', 'dimGray', 'oxfordBlue', 'outerSpace', 'gray', 'jet'];
const Type = ['p', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Text = ({ content, modifiers, type, children}) => {
  const Element = type;
  return content ? (
    <div className={mapModifiers('a-text', modifiers)} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}/>
    )
    : (
    <Element
      className={mapModifiers('a-text', modifiers)}
    >{children}</Element>)
}

export default Text;

Text.prototype = {
  content: PropTypes.string,
  // eslint-disable-next-line
  modifiers: PropTypes.array[FontFamily, FontWeight, TextStyle, ColorStyle, Size],
  type: PropTypes.oneOfType(Type),
  children: PropTypes.string,
}

Text.defaultProps = {
  size: '16x24',
  modifiers: ['600', 'fontRoboto', '16x24', 'black', '400'],
  type: 'p',
  children: 'text',
};