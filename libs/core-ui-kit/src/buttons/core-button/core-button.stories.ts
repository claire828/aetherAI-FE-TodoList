import { Meta, Story } from '@storybook/angular';
import { CoreButtonComponent } from './core-button.component';

export default {
  title: 'Buttons/CoreButton',
  component: CoreButtonComponent, // Directly reference the standalone component
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};
