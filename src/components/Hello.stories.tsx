import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hello } from './Hello';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Hello',
  component: Hello,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Hello>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hello> = (args) => <Hello />;

export const Basic = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Hello',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Hello',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Hello',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Hello',
// };
