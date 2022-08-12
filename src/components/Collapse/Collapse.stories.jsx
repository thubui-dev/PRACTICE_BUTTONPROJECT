import React from 'react';

import Collapse from './Collapse';

export default {
    title: 'Collapse',
    component: Collapse,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      isCollapsed: { control: 'boolean' },
    },
};

const Template = (args) => <Collapse {...args}>{'TTTTTTTTTTT'}</Collapse>;

export const Primary = Template.bind({});

Primary.args = {
  isCollapsed: true,
};