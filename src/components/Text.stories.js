import { Text } from './Text';

export default {
    title: 'Text',
    component: Text
}

const Template = args => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
    text: 'Abhilash'
}