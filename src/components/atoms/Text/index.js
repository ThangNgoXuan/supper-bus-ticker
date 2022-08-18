import React from 'react';
import PropTypes from 'prop-types';
import mapModifiers from '../../../utils/functions';

const Size = [ '14x18', '14x32', '14x42', '16x24', '80x88'];
const FontFamily = ['fontRoboto', 'fontLato'];
const FontWeight = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
const TextStyle = ['uppercase','capitalize','underline','italic','center','justify'];
const ColorStyle = ['black', 'red', 'white', 'spanishGray'];
const Type = ['p', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Text = ({ content, modifiers, type}) => {
  const Element = type;
  return (
    <Element 
      className={mapModifiers('a-text', modifiers)}
    >{content}</Element>
  )
}

export default Text;

Text.prototype = {
  content: PropTypes.string,
  // eslint-disable-next-line
  modifiers: PropTypes.array[FontFamily, FontWeight, TextStyle, ColorStyle, Size],
  type: PropTypes.oneOf(Type)
}

Text.defaultProps = {
  size: '16x24',
  content: 'text',
  modifiers: ['600', 'italic', 'fontRoboto', '16x24', 'black', '400'],
  type: 'p',
};