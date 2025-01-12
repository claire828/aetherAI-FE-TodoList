const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const sharedTailwindConfig = require('../../libs/tailwind-preset/tailwind.config');
import withMT from '@material-tailwind/html/utils/withMT';

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
});
