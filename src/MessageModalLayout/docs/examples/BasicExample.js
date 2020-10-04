/* eslint-disable */
import React from 'react';

class BasicExample extends React.Component {
  render() {
    return (
      <MessageModalLayout
        primaryButtonText="Leave"
        secondaryButtonText="Cancel"
        title="Leave without saving?"
        sideActions={(<Checkbox>Don't show this again</Checkbox>)}
      >
        <Text>
          Are you sure you want to leave this page? Your changes won't be saved.
        </Text>
      </MessageModalLayout>
    )
  }
}
