import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { CoreButtonComponent } from './core-button.component';

export default {
  title: 'CoreButton',
  component: CoreButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [CoreButtonComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'danger'] },
  },
} as Meta;

const Template: StoryFn<CoreButtonComponent> = (args: CoreButtonComponent) => ({
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

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  variant: 'danger',
};
