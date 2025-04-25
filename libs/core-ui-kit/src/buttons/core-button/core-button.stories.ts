import { Meta, Story } from '@storybook/angular';
import { CoreButtonComponent } from './core-button.component';

export default {
  title: 'Buttons/CoreButton',
  component: CoreButtonComponent,
  argTypes: {
    label: { control: 'text' },
    color: { control: { type: 'select' }, options: ['blue', 'red', 'green', 'gray'] },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    mode: { control: { type: 'select' }, options: ['default', 'border'] }, // New control for mode
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args, // Pass args to the component
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  color: 'blue',
  size: 'medium',
  mode: 'default', // Default mode
  disabled: false,
};

export const BorderMode = Template.bind({});
BorderMode.args = {
  label: 'Border Mode Button',
  color: 'red',
  size: 'medium',
  mode: 'border', // Border mode
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  color: 'gray',
  size: 'medium',
  mode: 'default',
  disabled: true,
};
