import { Meta, Story } from '@storybook/angular';
import { CoreButtonComponent } from './core-button.component';

export default {
  title: 'Buttons/CoreButton',
  component: CoreButtonComponent,
  argTypes: {
    label: { control: 'text' },
    color: { control: { type: 'select' }, options: ['blue', 'red', 'green', 'gray'] },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  color: 'blue',
  size: 'medium',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  color: 'gray',
  size: 'medium',
  disabled: true,
};

export const LargeRed = Template.bind({});
LargeRed.args = {
  label: 'Large Red Button',
  color: 'red',
  size: 'large',
  disabled: false,
};

export const SmallGreen = Template.bind({});
SmallGreen.args = {
  label: 'Small Green Button',
  color: 'green',
  size: 'small',
  disabled: false,
};
