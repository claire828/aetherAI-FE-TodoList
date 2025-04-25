import { Meta, Story } from '@storybook/angular';
import { CoreCheckboxComponent } from './core-checkbox.component';

export default {
  title: 'Checkbox/CoreCheckbox',
  component: CoreCheckboxComponent,
  argTypes: {
    checked: { control: 'boolean' },
    uniqId: { control: 'text' },
    color: { control: { type: 'select' }, options: ['black', 'blue', 'red', 'green', 'gray'] }, // Added color control
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  checked: false,
  uniqId: 'default-checkbox',
  color: 'black', // Default color
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  uniqId: 'checked-checkbox',
  color: 'blue', // Example with blue color
};

export const RedCheckbox = Template.bind({});
RedCheckbox.args = {
  checked: false,
  uniqId: 'red-checkbox',
  color: 'red', // Example with red color
};

export const GreenCheckbox = Template.bind({});
GreenCheckbox.args = {
  checked: true,
  uniqId: 'green-checkbox',
  color: 'green', // Example with green color
};
