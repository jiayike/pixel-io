import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'pixel-ui-components',
  buildEs5: true,
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
  ],
};
