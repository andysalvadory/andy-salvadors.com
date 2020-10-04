import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinearProgressBar.st.css';
import { LinearProgressBar as CoreLinearProgressBar } from 'wix-ui-core/dist/src/components/linear-progress-bar';
import ToggleOn from 'wix-ui-icons-common/system/ToggleOn';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import { Loadable } from 'wix-ui-core/dist/src/components/loadable';
import deprecationLog from '../utils/deprecationLog';

/**
 * This component is used for indicating a progress along a process.*/
class LinearProgressBar extends React.PureComponent {
  static displayName = 'LinearProgressBar';

  static propTypes = {
    /** Hook for testing purposes. */
    dataHook: PropTypes.string,

    /** Use to apply error styles*/
    error: PropTypes.bool,

    /** Message to display when an error happens */
    errorMessage: PropTypes.string,

    /** Use light theme instead of dark theme */
    light: PropTypes.bool,

    /** Use to display a percentage progress.*/
    showProgressIndication: PropTypes.bool,

    /** The number of the percentage progress */
    value: PropTypes.number || PropTypes.string,

    /** load Tooltip async using dynamic import */
    shouldLoadAsync: PropTypes.bool,

    /** Sets the skin of the Linear Progress Bar. */
    skin: PropTypes.oneOf(['standard', 'success']),
  };

  constructor(props) {
    super(props);

    if (props.hasOwnProperty('shouldLoadAsync')) {
      deprecationLog(
        '<LinearProgressBar/> - shouldLoadAsync prop is deprecated. Just remove it, no other change required.',
      );
    }
  }

  render() {
    const {
      errorMessage,
      skin,
      light,
      dataHook,
      error,
      shouldLoadAsync,
      ...otherProps
    } = this.props;

    return (
      <CoreLinearProgressBar
        data-hook={dataHook}
        {...styles('root', { light, skin }, this.props)}
        data-skin={skin}
        {...otherProps}
        error={error}
        successIcon={<ToggleOn />}
        errorIcon={
          <Loadable
            loader={{
              Tooltip: () =>
                // TODO: convert to WSR Tooltip
                shouldLoadAsync
                  ? import(
                      /* webpackChunkName: "wsr-tooltip" */ '../Tooltip/TooltipNext'
                    )
                  : require('../Tooltip/TooltipNext'),
            }}
            defaultComponent={<FormFieldError data-hook="wsr-error-icon" />}
            shouldLoadComponent={Boolean(error && errorMessage)}
          >
            {({ Tooltip }) => {
              return (
                <Tooltip
                  data-hook="linear-progressbar-tooltip"
                  placement="top"
                  content={errorMessage}
                >
                  <FormFieldError data-hook="wsr-error-icon" />
                </Tooltip>
              );
            }}
          </Loadable>
        }
      />
    );
  }
}

LinearProgressBar.defaultProps = {
  skin: 'standard',
};

export default LinearProgressBar;
