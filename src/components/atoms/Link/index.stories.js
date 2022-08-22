import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Link from '.';

export default {
  title: 'Component/atoms/Link',
  component: Link,
  argTypes: {},
};

const Template = (args) => (
  <BrowserRouter>
    <Link {...args} />
  </BrowserRouter>
);
export const Internal = Template.bind({});
Internal.args = {
  children: 'internal',
  href: 'https://www.google.com/',
  target: '_self'
};

export const External = Template.bind({});
External.args = {
  children: 'External',
  href: 'https://www.google.com/',
  target: '_blank'
};

export const NoHref = Template.bind({});
NoHref.args = {
  children: 'no href',
};