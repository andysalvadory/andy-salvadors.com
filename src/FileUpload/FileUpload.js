import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';

/** A wrapper component to support native file upload */
class FileUpload extends React.PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    const {
      dataHook,
      className,
      children,
      multiple,
      accept,
      capture,
      onChange,
    } = this.props;

    return (
      <label className={className} data-hook={dataHook}>
        {React.cloneElement(children, {
          onClick: event => {
            if (typeof children.props.onClick === 'function')
              children.props.onClick();
            this.inputRef.current.click();
            event.preventDefault();
          },
        })}
        <input
          type="file"
          data-hook={dataHooks.input}
          style={{ display: 'none' }}
          ref={this.inputRef}
          multiple={multiple}
          accept={accept}
          capture={capture}
          onChange={event => onChange(event.target.files)}
        />
      </label>
    );
  }
}

FileUpload.displayName = 'FileUpload';

FileUpload.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** An element to be wrapped by the component */
  children: PropTypes.element.isRequired,

  /** Allow uploading multiple files */
  multiple: PropTypes.bool,

  /** set file types to accept */
  accept: PropTypes.string,

  /** specifies which camera to use for capture of image or video data */
  capture: PropTypes.oneOf(['user', 'environment']),

  /** input onChange callback */
  onChange: PropTypes.func.isRequired,
};

FileUpload.defaultProps = {
  multiple: false,
  accept: '',
  capture: 'user',
};

export default FileUpload;
