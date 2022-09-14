import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';

const meta: ComponentMeta<typeof Button> = {
    title: 'Design System/Button',
    component: Button,
};
export default meta;

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button 1',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Button 2',
};
