import React from 'react';
import Page from 'wix-style-react/Page';
import { Breadcrumbs } from 'wix-style-react/Breadcrumbs';
import Button from 'wix-style-react/Button';
import { Row, Col, Container } from 'wix-style-react/Grid';
import CardGalleryItem from 'wix-style-react/CardGalleryItem';
import Proportion from 'wix-style-react/Proportion';
import AddItem from 'wix-style-react/AddItem';

class ExampleGalleryLayout extends React.Component {
  renderHeader() {
    const ActionBar = () => {
      return <Button>Save</Button>;
    };

    return (
      <Page.Header
        title="Page Title"
        breadcrumbs={
          <Breadcrumbs
            items={[1, 2, 3].map(i => ({ id: `${i}`, value: `Page ${i}` }))}
            activeId="3"
            size="medium"
            theme="onGrayBackground"
            onClick={() => {}}
          />
        }
        actionsBar={<ActionBar />}
      />
    );
  }

  renderCardGalleryItem() {
    const backgroundImageUrl =
      'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';

    return (
      <CardGalleryItem
        title={'Card Title'}
        subtitle={'Card subtitle'}
        primaryActionProps={{
          label: 'Button',
          onClick: () => {
            alert('Primary action clicked');
          },
        }}
        secondaryActionProps={{
          label: 'Text link',
          onClick: () => {
            alert('Secondary action clicked');
          },
        }}
        backgroundImageUrl={backgroundImageUrl}
        data-hook="storybook-card-gallery-item"
      />
    );
  }

  render() {
    return (
      <Page upgrade height="372px">
        {this.renderHeader()}
        <Page.Content>
          <Container>
            {Array.from(Array(2).keys()).map(rowKey => (
              <Row key={rowKey}>
                {Array.from(Array(3).keys()).map(colKey => (
                  <Col key={colKey} span={4}>
                    {this.renderCardGalleryItem()}
                  </Col>
                ))}
              </Row>
            ))}
            <Row>
              <Col span={4}>
                {/* We use <Proportion/> to stretch <AddItem/> vertically (it doesn't stretch automatically because its height is 100%, whereas the row doesn't have a defined height) */}
                <Proportion>
                  <AddItem>Add Item</AddItem>
                </Proportion>
              </Col>
            </Row>
          </Container>
        </Page.Content>
      </Page>
    );
  }
}

export default ExampleGalleryLayout;
