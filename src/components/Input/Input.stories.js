import React from 'react'
import { Input } from './Input';

export default {
    title: 'form/Input',
    component: Input
}

const Template = args => <Input {...args} />
export const Small = Template.bind({});
Small.args = {
    size: 'small',
    placeholder: 'Small Input'
}

export const Meduim = Template.bind({});
Meduim.args = {
    size: 'meduim',
    placeholder: 'Meduim Input'
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    placeholder: 'Large Input'
}