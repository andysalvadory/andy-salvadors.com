import React from 'react';
import { Container, Row, Col } from 'wix-style-react/Grid';
import Page from 'wix-style-react/Page';

//importing components by family type
import FoundationFamily from './ComponentsFamilies/FoundationFamily';
import LayoutFamily from './ComponentsFamilies/LayoutFamily/LayoutFamily';
import InputFamily from './ComponentsFamilies/InputFamily';
import SelectionFamily from './ComponentsFamilies/SelectionFamily';
import ButtonFamily from './ComponentsFamilies/ButtonFamily';
import NavigationFamily from './ComponentsFamilies/NavigationFamily';
import TooltipFamily from './ComponentsFamilies/TooltipFamily';
import NotificationFamily from './ComponentsFamilies/NotificationFamily';
import ModalFamily from './ComponentsFamilies/ModalFamily';
import PickerFamily from './ComponentsFamilies/PickerFamily';
import OtherFamily from './ComponentsFamilies/OtherFamily';
import ContentWidgetsFamily from './ComponentsFamilies/ContentWidgetsFamily';

class ComponentsCheatsheet extends React.Component {
  render() {
    const componentsFamiliesArr = [
      FoundationFamily,
      LayoutFamily,
      InputFamily,
      SelectionFamily,
      ButtonFamily,
      NavigationFamily,
      TooltipFamily,
      NotificationFamily,
      ModalFamily,
      PickerFamily,
      OtherFamily,
      ContentWidgetsFamily,
    ];

    return (
      <Page upgrade>
        <Page.Header
          title="Components Cheatsheet"
          subtitle="Common components index"
        />
        <Page.Content>
          <Container>
            {componentsFamiliesArr.map((Family, i) => (
              <Row key={`family-row-${i}`}>
                <Family key={`family-${i}`} />
              </Row>
            ))}
          </Container>
        </Page.Content>
      </Page>
    );
  }
}
export default ComponentsCheatsheet;
