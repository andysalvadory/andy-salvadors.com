/* eslint-disable no-undef */
import React from 'react';

import FormField from 'wix-style-react/FormField';
import ToggleSwitch from 'wix-style-react/ToggleSwitch';

class ToggleSwitchWithState extends React.Component {
  state = {
    value: false,
  };

  render() {
    return (
      <div>
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
            checked={this.state.value}
            onChange={e => this.setState({ value: e.target.checked })}
          />
        </FormField>
      </div>
    );
  }
}

render(<ToggleSwitchWithState />);
