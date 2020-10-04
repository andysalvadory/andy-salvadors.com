/* eslint-disable no-undef */
import React from 'react';
import RichTextInputArea from 'wix-style-react/RichTextInputArea';
import Button from 'wix-style-react/Button';
import { Layout, Cell } from 'wix-style-react/Layout';
import Box from 'wix-style-react/Box';

class RichTextInputAreaSetValueExample extends React.Component {
  render() {
    return (
      <Layout>
        <Cell>
          <RichTextInputArea
            initialValue="hello world"
            ref={ref => (this._ref = ref)}
          />
        </Cell>
        <Cell>
          <Box inline marginRight={1}>
            <Button onClick={() => this._ref.setValue('hello world')}>
              reset
            </Button>
          </Box>

          <Button onClick={() => this._ref.setValue('')}>clean</Button>
        </Cell>
      </Layout>
    );
  }
}

render(<RichTextInputAreaSetValueExample />);
