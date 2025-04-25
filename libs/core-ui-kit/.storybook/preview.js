// import { Preview } from '@storybook/angular';

// 👇 Add these
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from './documentation.json';
setCompodocJson(docJson);

const preview = {};
export default preview;
