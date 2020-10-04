/* eslint-disable */
import React from 'react';

class NoIllustrationExample extends React.Component {
  render() {
    return (
      <AnnouncementModalLayout
        primaryButtonText="Leave"
        linkText="Learn More"
        title="All Your Info In One Place"
      >
        <Text>
          Meet your brand new General Info page.<br/>
          We brought all your business information together here.
        </Text>
        <Box backgroundColor='grey' width='100%' height='210px' marginTop='18px' borderRadius='4px'></Box>
      </AnnouncementModalLayout>
    )
  }
}
