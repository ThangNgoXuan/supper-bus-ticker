import React from 'react';
import PropTypes from 'prop-types';
import mapModifiers from '../../../utils/functions';
import DOMPurify from 'dompurify';


const Size = [ '12x18', '14x18', '14x32', '14x42', '16x24', '80x88', '30x32'];
export const FontFamily = ['fontRoboto', 'fontLato'];
export const FontWeight = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
export const TextStyle = ['uppercase','capitalize','underline','italic','center','justify'];
export const ColorStyle = ['black', 'red', 'white', 'spanishGray', 'electricCrimson', 'coolBlack'];
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
  // content: 'text',
  modifiers: ['600', 'italic', 'fontRoboto', '16x24', 'black', '400'],
  type: 'p',
  children: 'text',
};