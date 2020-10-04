export const simple = `
class DatePickerExample extends React.PureComponent {
  state = { value: new Date() };

  render() {
    const { value } = this.state;
    return (
      <DatePicker
        placeholderText="Select Date"
        value={value}
        onChange={value => this.setState({ value })}
      />
    );
  }
}
`;

export const customizations = `
<DatePicker
  value={new Date('08/07/1986')}
  placeholderText="Select Date"
  onChange={event => console.log(event)}
  dateFormat="D/M/YY"
  locale='fr'
  showMonthDropdown
  showYearDropdown
/>
`;

export const filterDate = `
<DatePicker
  value={new Date()}
  placeholderText="Select Date"
  onChange={event => console.log(event)}
  filterDate={date => date < new Date()}
/>
`;

export const rangeSelection = `
<DatePicker
  value={new Date()}
  placeholderText="Select Date Range"
  onChange={event => console.log(event)}
  twoMonths
  selectionMode="range"
  shouldCloseOnSelect={false}
/>
`;
