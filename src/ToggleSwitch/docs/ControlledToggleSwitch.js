/* eslint-disable no-undef */
import React from 'react';

import { FormField, ToggleSwitch } from 'wix-style-react';

class ControlledToggleSwitch extends React.Component {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;
    return (
      <FormField
        id="formfieldToggleSwitchId"
        infoContent="I help you to fill info"
        label="Toggle"
        labelPlacement="right"
        stretchContent={false}
        required
      >
        <ToggleSwitch
          id="formfieldToggleSwitchId"
          checked={checked}
          onChange={e => this.setState({ checked: e.target.checked })}
        />
      </FormField>
    );
  }
}
