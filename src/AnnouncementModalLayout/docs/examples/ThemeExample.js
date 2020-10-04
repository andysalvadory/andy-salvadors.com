/* eslint-disable */
import React from 'react';

class ThemeExample extends React.Component {
  render() {
    return (
      <AnnouncementModalLayout
        primaryButtonText="Start Now"
        linkText="Learn More"
        title="All Your Info In One Place"
        // This illustration is only an example with a relative path asset. Replace with your image
        illustration={"announcement_illustration.svg"}
        theme='premium'
      >
        <Text>
          Meet your brand new General Info page.<br/>
          We brought all your business information together here.
        </Text>
      </AnnouncementModalLayout>
    )
  }
}
