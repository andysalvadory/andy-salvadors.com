import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinearProgressBar.st.css';
import { LinearProgressBar as CoreLinearProgressBar } from 'wix-ui-core/dist/src/components/linear-progress-bar';
import ToggleOn from 'wix-ui-icons-common/system/ToggleOn';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import { Loadable } from 'wix-ui-core/dist/src/components/loadable';

/**
 * This component is used for indicating a progress along a process.*/
class LinearProgressBar extends React.PureComponent {
  static displayName = 'LinearProgressBar';

  static propTypes = {
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
  };

  render() {
    const {
      errorMessage,
      light,
      dataHook,
      error,
      shouldLoadAsync,
      ...otherProps
    } = this.props;

    return (
      <CoreLinearProgressBar
        data-hook={dataHook}
        {...styles('root', { light }, this.props)}
        {...otherProps}
        error={error}
        successIcon={<ToggleOn />}
        errorIcon={
          <Loadable
            loader={{
              Tooltip: () =>
                // TODO: convert to WSR Tooltip
                shouldLoadAsync
                  ? import('wix-ui-backoffice/dist/es/src/components/Tooltip')
                  : require('wix-ui-backoffice/Tooltip'),
            }}
            defaultComponent={<FormFieldError data-hook="wsr-error-icon" />}
            namedExports={{
              Tooltip: 'Tooltip',
            }}
            shouldLoadComponent={!!error}
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
  shouldLoadAsync: false,
};

export default LinearProgressBar;
