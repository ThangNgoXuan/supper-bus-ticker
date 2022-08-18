// Button.stories.js|jsx

import React from 'react';

import Text from '.';

export default {
  title: 'Component/Text',
  component: Text,
  argTypes: {
    content: {
        control: 'text',
        defaultValue: 'Text',
    },
    size: {
        control: 'select',
        options: [ '14x18', '14x32', '14x42', '16x24', '80x88'],
        defaultValue: '16x24',
    },
    fontFamily: {
        control: 'select',
        options: ['fontRoboto', 'fontLato'],
    },
    fontWeight: {
        control: 'select',
        options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    },
    textStyle: {
      control: 'select',
      options: ['uppercase','capitalize','underline','italic','center','justify'],
    },
    color: {
      control: 'select',
      options: ['black', 'red', 'white', 'spanishGray'],
    },
    type: {
      control: 'select',
      options: ['p', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 
    }
  },
};

export const Primary = ({content, color, fontFamily, fontWeight, textStyle, size, type}) => <Text type={type} content={content} modifiers={[fontFamily, fontWeight, textStyle, color, size]}/>;