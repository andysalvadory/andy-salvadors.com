import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import css from './ColorPickerConverter.st.css';
import ColorPickerConverterViewer from './ColorPickerConverterViewer';
import { safeColor, getHsbOrEmpty } from './utils';

export default class ColorPickerConverterHsb extends React.PureComponent {
  static propTypes = {
    dataHook: PropTypes.string,
    current: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onAdd: PropTypes.func,
  };

  state = getHsbOrEmpty(this.props.current);

  isInputsEmpty() {
    const { h, s, l } = this.state;
    return [h, s, l].every(value => value === '');
  }

  render() {
    const { dataHook } = this.props;
    return (
      <div {...css('root', {}, this.props)} data-hook={dataHook}>
        <div {...css('distribute', {}, this.props)}>
          <Input
            size="small"
            value={this.state.h}
            onChange={e => this.change('h', e)}
            placeholder={'H'}
            {...css('distributedItem', {}, this.props)}
          />
          <Input
            size="small"
            value={this.state.s}
            onChange={e => this.change('s', e)}
            placeholder={'S'}
            {...css('distributedItem', {}, this.props)}
          />
          <Input
            size="small"
            value={this.state.l}
            onChange={e => this.change('l', e)}
            placeholder={'B'}
            {...css('distributedItem', {}, this.props)}
          />
        </div>
        <ColorPickerConverterViewer
          {...this.props}
          color={this.props.current}
        />
      </div>
    );
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState(getHsbOrEmpty(props.current));
  }

  change(part, { target: { value } }) {
    this.setState({ [part]: value }, () => {
      const { h, s, l } = this.state;
      const isMissingData = [h, s, l].some(_value => _value === '');
      const _color = safeColor(
        isMissingData && this.props.allowEmpty ? '' : this.state,
        this.props.allowEmpty,
      );
      if (!isMissingData || this.isInputsEmpty()) {
        this.props.onChange(_color);
      }
    });
  }
}
