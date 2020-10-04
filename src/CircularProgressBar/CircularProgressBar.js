import React from 'react';
import { CircularProgressBar as CoreCircularProgressBar } from 'wix-ui-core/dist/src/components/circular-progress-bar';
import CircleLoaderCheck from 'wix-ui-icons-common/system/CircleLoaderCheck';
import CircleLoaderCheckSmall from 'wix-ui-icons-common/system/CircleLoaderCheckSmall';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import FormFieldErrorSmall from 'wix-ui-icons-common/system/FormFieldErrorSmall';
import style from './CircularProgressBar.st.css';
import PropTypes from 'prop-types';
import { Loadable } from 'wix-ui-core/dist/src/components/loadable';
import { dataHooks, Size, sizesMap } from './constants';
import deprecationLog from '../utils/deprecationLog';

const sizeToSuccessIcon = {
  [Size.small]: <CircleLoaderCheckSmall />,
  [Size.medium]: <CircleLoaderCheck />,
  [Size.large]: <CircleLoaderCheck />,
};

const sizeToErrorIcon = {
  [Size.small]: <FormFieldErrorSmall />,
  [Size.medium]: <FormFieldError />,
  [Size.large]: <FormFieldError />,
};

class CircularProgressBar extends React.PureComponent {
  constructor(props) {
    super(props);

    if (props.hasOwnProperty('shouldLoadAsync')) {
      deprecationLog(
        '<CircularProgressBar/> - shouldLoadAsync prop is deprecated. Just remove it, no other change required.',
      );
    }
  }

  render() {
    const {
      errorMessage,
      light,
      size,
      dataHook,
      shouldLoadAsync,
      ...otherProps
    } = this.props;

    const ProgressBar = (
      <CoreCircularProgressBar
        {...style('progressBar', { light, size }, this.props)}
        {...otherProps}
        data-hook={dataHooks.circularProgressBar}
        size={sizesMap[size]}
        data-size={size}
        successIcon={sizeToSuccessIcon[size]}
        errorIcon={sizeToErrorIcon[size]}
      />
    );

    return (
      <div data-hook={dataHook} {...style('root', {}, this.props)}>
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
          defaultComponent={ProgressBar}
          shouldLoadComponent={this.props.error && errorMessage}
        >
          {({ Tooltip }) => {
            return (
              <Tooltip
                data-hook={dataHooks.tooltip}
                placement="top"
                content={errorMessage}
              >
                {ProgressBar}
              </Tooltip>
            );
          }}
        </Loadable>
      </div>
    );
  }
}

CircularProgressBar.displayName = 'CircularProgressBar';

CircularProgressBar.defaultProps = {
  size: 'medium',
};

CircularProgressBar.propTypes = {
  /** Should be true if had failure during the progress */
  error: PropTypes.bool,

  /** Label to display when an error happens */
  errorLabel: PropTypes.string,

  /** Message to display when an error happens */
  errorMessage: PropTypes.string,

  /** Use light theme instead of dark theme */
  light: PropTypes.bool,

  /** Use to display a percentage progress */
  showProgressIndication: PropTypes.bool,

  /** Size of the bar */
  size: PropTypes.string,

  /** The number of the percentage progress */
  value: PropTypes.number || PropTypes.string,

  dataHook: PropTypes.string,

  /** @deprecated load Tooltip async using dynamic import */
  shouldLoadAsync: PropTypes.bool,
};

export default CircularProgressBar;
