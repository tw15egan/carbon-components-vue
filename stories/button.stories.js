/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';

storiesOf('Button', module)
  .add('normal', () => ({
    template: '<ca-button primary>Text</ca-button>',
  }));