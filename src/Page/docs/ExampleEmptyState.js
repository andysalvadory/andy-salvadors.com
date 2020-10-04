import React from 'react';

import Add from 'wix-ui-icons-common/Add';

import ImagePlaceholder from '../../../stories/utils/ImagePlaceholder';

import { Page, Button, TextButton, EmptyState, Card } from 'wix-style-react';

const ExampleEmptyState = props => (
  <Page
    {...props}
    backgroundImageUrl="https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg"
  >
    <Page.Header
      title="Your Product"
      actionsBar={<Button prefixIcon={<Add />}>New Item</Button>}
    />

    <Page.Content>
      <Card>
        <EmptyState
          theme="page"
          title="You don't have any items yet"
          subtitle="Create your product item in an easy & fast way to display it on your website"
          image={<ImagePlaceholder />}
        >
          <TextButton prefixIcon={<Add />}>New Item</TextButton>
        </EmptyState>
      </Card>
    </Page.Content>
  </Page>
);

export default ExampleEmptyState;
