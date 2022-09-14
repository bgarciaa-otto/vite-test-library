import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ButtonTest from './ButtonTest';

const meta: ComponentMeta<typeof ButtonTest> = {
    title: 'Design System/ButtonTest',
    component: ButtonTest,
};
export default meta;

const Template: ComponentStory<typeof ButtonTest> = (args: any) => <ButtonTest {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button 1',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Button 2',
};
