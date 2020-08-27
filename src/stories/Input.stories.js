import React from 'react';

import { Input } from './../components/Input';

export default {
    title: 'to Input',
    component: Input,
    name: 'Input'
  };

const Template = (args) => <Input {...args} />;

export const Standart = Template.bind({});
Standart.args = {
    onChange: () => {},
    value: 'Send',
    onKeyPress: () => {},

};
