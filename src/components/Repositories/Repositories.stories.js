import React from 'react'
import { Repositories } from './Repositories';

export default {
    title: 'integration/Repositories',
    component: Repositories
}

const Template = args => <Repositories {...args} />

export const Default = Template.bind({});

