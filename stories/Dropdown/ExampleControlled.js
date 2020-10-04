import React from 'react';
import Dropdown from 'wix-style-react/Dropdown';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px',
  marginBottom: '160px'
};

const options = [
  {id: 1, value: 'Option 1'},
  {id: 2, value: 'Option 2'},
  {id: 3, value: 'Option 3'},
  {id: 4, value: 'Option 4', disabled: true},
  {id: 5, value: 'Option 5'}
];

class ControlledDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(option) {
    console.log(`Option ${JSON.stringify(option)} selected`);
  }

  render() {
    return (
      <Dropdown
        dataHook="story-dropdown"
        options={options}
        onSelect={this.onSelect}
        placeholder={'Choose an option'}
        />
    );
  }
}

export default () =>
  <div className="ltr" style={style}>
    <ControlledDropdown/>
  </div>;
