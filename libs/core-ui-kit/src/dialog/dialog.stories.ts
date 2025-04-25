import { Meta, Story } from '@storybook/angular';
import { CoreDialogService } from './dialog.service';
import { CoreDialogComponent } from './dialog.component';

export default {
  title: 'Dialog/CoreDialog',
  component: CoreDialogComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
  moduleMetadata: {
    providers: [CoreDialogService],
  },
});

export const DefaultDialog = Template.bind({});
DefaultDialog.args = {
  config: {
    injectorID: 'default-dialog',
    title: 'Default Dialog',
    content: 'This is a default dialog.',
    overlayConfig: {},
    autoClose: true,
  },
};

export const ComponentDialog = Template.bind({});
ComponentDialog.args = {
  config: {
    injectorID: 'component-dialog',
    componentRef: () => CoreDialogComponent,
    overlayConfig: {},
    autoClose: true,
  },
};
