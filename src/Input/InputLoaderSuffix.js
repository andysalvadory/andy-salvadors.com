import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import Loader from '../Loader';
import styles from './Input.scss';

class InputLoaderSuffix extends React.Component {
  render() {
    return (
      <Tooltip
        upgrade
        dataHook="input-tooltip"
        disabled={!this.props.tooltipMessage}
        placement={this.props.tooltipPlacement}
        alignment="center"
        textAlign="start"
        content={this.props.tooltipMessage || ''}
        overlay=""
        maxWidth={230}
        hideDelay={150}
        zIndex={10000}
      >
        <div className={styles.loaderContainer}>
          <Loader size={'tiny'} />
        </div>
      </Tooltip>
    );
  }
}

InputLoaderSuffix.propTypes = {
  tooltipMessage: PropTypes.node.isRequired,
  tooltipPlacement: PropTypes.string,
};

export default InputLoaderSuffix;
