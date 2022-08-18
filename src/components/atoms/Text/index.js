import React from 'react';
import PropTypes from 'prop-types';
import mapModifiers from '../../../utils/functions';

const Size = ['16x24', '80x88', '30x32'];

const Text = ({isTrue, size, content, ...props}) => {
  return (
    <div 
      className={mapModifiers('a-text', isTrue && 'qqq', size)}
      {...props}
    >{content}</div>
  )
}

export default Text;

Text.prototype = {
  size: PropTypes.oneOf(Size),
  content: PropTypes.string,
}

Text.defaultProps = {
  size: '30x32',
  content: 'text',
};