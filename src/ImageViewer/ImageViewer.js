import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Delete from 'wix-ui-icons-common/Delete';
import Replace from 'wix-ui-icons-common/Replace';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';

import styles from './ImageViewer.st.css';

import Tooltip from '../Tooltip/TooltipNext/Tooltip';
import IconButton from '../IconButton';

import AddItem from '../AddItem/AddItem';

class ImageViewer extends Component {
  _renderAddImage = () => {
    const {
      imageUrl,
      onAddImage,
      addImageInfo,
      tooltipProps,
      disabled,
    } = this.props;
    return (
      !imageUrl && (
        <AddItem
          onClick={onAddImage}
          theme="image"
          dataHook="add-image"
          disabled={disabled}
          tooltipContent={addImageInfo}
          tooltipProps={{ ...tooltipProps, content: addImageInfo }}
        />
      )
    );
  };

  _renderImage = () => {
    const {
      imageUrl,
      disabled,
      showUpdateButton,
      removeRoundedBorders,
    } = this.props;
    return (
      !!imageUrl && (
        <div className={styles.imageContainer}>
          <img
            data-hook="image-viewer-image"
            className={styles.image}
            src={imageUrl}
          />
          {!disabled && (
            <div
              {...styles(
                'imageBackground',
                { removeRadius: removeRoundedBorders },
                this.props,
              )}
            >
              <div className={styles.buttons}>
                {showUpdateButton && this._renderUpdateButton()}
                {this._renderRemoveButton()}
              </div>
            </div>
          )}
        </div>
      )
    );
  };

  _renderUpdateButton = () => {
    const { updateImageInfo, onUpdateImage, tooltipProps } = this.props;
    return (
      <Tooltip
        {...tooltipProps}
        upgrade
        timeout={0}
        dataHook="update-image-tooltip"
        content={updateImageInfo}
      >
        <IconButton
          dataHook="update-image"
          onClick={onUpdateImage}
          skin="light"
          priority="secondary"
        >
          <Replace />
        </IconButton>
      </Tooltip>
    );
  };

  _renderRemoveButton = () => {
    const { removeImageInfo, onRemoveImage, tooltipProps } = this.props;
    return (
      <Tooltip
        {...tooltipProps}
        upgrade
        timeout={0}
        dataHook="remove-image-tooltip"
        content={removeImageInfo}
      >
        <IconButton
          dataHook="remove-image"
          skin="light"
          priority="secondary"
          onClick={onRemoveImage}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    );
  };

  _renderErrorIcon = () => {
    const { error, disabled, errorMessage } = this.props;
    const shouldRender = error && !disabled;
    return (
      shouldRender && (
        <div className={styles.errorContainer}>
          <Tooltip
            upgrade
            content={errorMessage}
            timeout={0}
            appendTo="window"
            dataHook="error-image-tooltip"
            placement="top"
          >
            <div className={styles.error}>
              <FormFieldError />
            </div>
          </Tooltip>
        </div>
      )
    );
  };

  render() {
    const { width, height, error, disabled, dataHook } = this.props;
    const states = { disabled, error: !disabled && error };
    return (
      <div
        {...styles('root', states, this.props)}
        style={{ width, height }}
        data-disabled={disabled || void 0}
        data-hook={dataHook}
      >
        {this._renderAddImage()}
        {this._renderImage()}
        {this._renderErrorIcon()}
      </div>
    );
  }
}

ImageViewer.displayName = 'ImageViewer';

ImageViewer.defaultProps = {
  showUpdateButton: true,
  addImageInfo: 'Add Image',
  updateImageInfo: 'Update',
  removeImageInfo: 'Remove',
};

ImageViewer.propTypes = {
  /** Image url, blank for not uploaded */
  imageUrl: PropTypes.string,
  /** Show error icon */
  error: PropTypes.bool,
  /** Error tooltip message */
  errorMessage: PropTypes.string,
  /** Error tooltip placement
   * @deprecated
   * @see tooltipProps
   */
  tooltipPlacement: PropTypes.string,
  /** Tooltip props, common for all tooltips */
  tooltipProps: PropTypes.object,
  /** Show update button */
  showUpdateButton: PropTypes.bool,
  /** Add image click handler */
  onAddImage: PropTypes.func,
  /** Update image click handler */
  onUpdateImage: PropTypes.func,
  /** Remove image click handler */
  onRemoveImage: PropTypes.func,
  /** Add image tooltip */
  addImageInfo: PropTypes.string,
  /** Update image tooltip */
  updateImageInfo: PropTypes.string,
  /** Remove image tooltip */
  removeImageInfo: PropTypes.string,
  /** clear borders radius when displayed in sharp-edges containers */
  removeRoundedBorders: PropTypes.bool,
  /** Element width */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Element height */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Applies disabled styles and disables editability options */
  disabled: PropTypes.bool,
};

export default ImageViewer;
