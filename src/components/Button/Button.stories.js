import React from 'react'
import { Button } from './Button';

export default {
    title: 'form/Button',
    component: Button
}

const Template = args => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
    children: 'Default',
    variant: 'default',
}
export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
    variant: 'primary'
}
export const Success = Template.bind({});
Success.args = {
    children: 'Success',
    variant: 'success'
}
export const Danger = Template.bind({});
Danger.args = {
    children: 'Danger',
    variant: 'danger'
}
export const Info = Template.bind({});
Info.args = {
    children: 'Info',
    variant: 'info'
}