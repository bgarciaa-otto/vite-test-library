import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ButtonAny from './ButtonAny';

const meta: ComponentMeta<typeof ButtonAny> = {
    title: 'Design System/ButtonAny',
    component: ButtonAny,
};
export default meta;

const Template: ComponentStory<typeof ButtonAny> = (args: any) => <ButtonAny {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button 1',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Button 2',
};
