import React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout, Cell } from '../Layout';

import SectionHelper, { HELPER_APPEARANCE } from '.';

storiesOf('SectionHelper', module).add('Appearances', () => (
  <Layout>
    {Object.keys(HELPER_APPEARANCE).map(appearance => (
      <Cell key={appearance}>
        <SectionHelper
          appearance={appearance}
          actionText="I understand the consequences"
          title="Look at this important message!"
          children="This is a very important message"
        />
      </Cell>
    ))}
  </Layout>
));
