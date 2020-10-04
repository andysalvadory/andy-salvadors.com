import React from 'react';

import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import { storiesOf } from '@storybook/react';

import MainExample from './MainExample';
import Box from '../../Box';

import MainExampleRaw from '!raw-loader!./MainExample';
import MainExampleRTL from './MainExampleRTL';

import MainExampleRTLRaw from '!raw-loader!./MainExampleRTL';
import { BulkActionsExample } from './BulkActionsExample';

import BulkActionsExampleRaw from '!raw-loader!./BulkActionsExample';
import { storySettings } from './storySettings';
import Readme from './README.md';
import { Card } from 'wix-style-react';

storiesOf(storySettings.category, module).add(storySettings.storyName, () => (
  <div>
    <Markdown source={Readme} />
    <div>
      <Markdown
        source={`
### Main Toolbar
The Main Toolbar typically includes components that let you search or filter the table data.

It may include (by convention) the following UI components:
  - A Table Title (\`<TableToolbar.Title>My Table</TableToolbar.Title>\`). If Table reside in a \`<Page/>\` component, then the Title would usually be in the Page component rather then in the Toolbar.
  - Input box
  - Dropdown
  - DateRange
  - Checkbox
        `}
      />
      <Box minWidth="874px" maxWidth="1234px" padding="20px 50px">
        <CodeExample title="Typical Main Toolbar" code={MainExampleRaw}>
          <Card>
            <MainExample />
          </Card>
        </CodeExample>

        <CodeExample
          title="Typical Main Toolbar (RTL)"
          code={MainExampleRTLRaw}
        >
          <Card>
            <MainExampleRTL />
          </Card>
        </CodeExample>
      </Box>
    </div>
    <div>
      <Markdown
        source={`
### Typical BulkActions Toolbar
The BulkActions Toolbar typically includes actions which act on the current selected rows.

It may include (by convention) the following UI component:
 - A selection count (\`<TableToolbar.SelectedCount> 2 Selected </TableToolbar.SelectedCount>\`)
 - Action Buttons(\`<Button/>\`). All Buttons should have \`theme="whiteblueprimary"\`.
   - Icon Button
   - Text only Button
   - Button with Prefix
 - A collapsed Search input box (\`<Search expandable/>\`)
        `}
      />
      <Box minWidth="874px" maxWidth="1234px" padding="20px 50px">
        <CodeExample
          title="Typical BulkActions Toolbar"
          code={BulkActionsExampleRaw}
        >
          <Card>
            <BulkActionsExample />
          </Card>
        </CodeExample>
      </Box>
    </div>
  </div>
));
