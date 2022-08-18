// Button.stories.js|jsx

import React from 'react';

import Text from '.';

export default {
  title: 'Content/Text',
  component: Text,
  argTypes: {
    content: {
        control: 'text',
        defaultValue: 'Text',
    },
    size: {
        control: 'select',
        options: ['16x24', '30x32', '80x88'],
        defaultValue: '16x24',
    },
    fontFamily: {
        control: 'select',
    },
  },
};

export const Primary = ({content, size}) => <Text size={size} content={content}/>;