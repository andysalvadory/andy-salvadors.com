import React from 'react';
import {
  string,
  number,
  oneOf,
  element,
  func,
  bool,
  oneOfType,
} from 'prop-types';
import { withEllipsedTooltip } from 'wix-ui-core/dist/src/hocs/EllipsedTooltip';

import OriginalText from './Text';
import tooltip from '../common/EllipsedTooltip/EllipsedTooltip.st.css';
import { ZIndex } from '../ZIndex';

class Text extends React.PureComponent {
  static displayName = 'Text';

  static propTypes = {
    ...OriginalText.propTypes,
    /** should the text get ellipsed with tooltip, or should it get broken into lines when it reaches the end of its container */
    ellipsis: bool,
    /** `ellipsis` prop. Tooltip content calculation relation to a dom element. Can be either:
     *  `'window', 'scrollParent', 'viewport', 'parent'`, `element` or
     * `function` based predicate i.e. (elm) =>
     *  elm.getAttribute('data-hook') === 'value'
     */
    appendTo: oneOfType([
      oneOf(['window', 'scrollParent', 'viewport', 'parent']),
      element,
      func,
    ]),
    /** `ellipsis` prop. Whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element. */
    flip: bool,
    /** `ellipsis` prop. Whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary. */
    fixed: bool,
    /** `ellipsis` prop. Tooltip content placement in relation to target element */
    placement: string,
    /** `ellipsis` prop. Tooltip timeout value. */
    timeout: number,
    /** `ellipsis` prop. Tooltip content max width value. */
    maxWidth: number,
    /** `ellipsis` prop. Tooltip content zIndex. */
    zIndex: number,
    /** `ellipsis` prop. Tooltip hide delay. */
    hideDelay: number,
    /** `ellipsis` prop. Tooltip show delay. */
    showDelay: number,
  };

  static defaultProps = {
    appendTo: 'window',
    maxWidth: 204,
    zIndex: ZIndex('Tooltip'),
  };

  constructor(props) {
    super(props);

    const {
      flip,
      fixed,
      placement,
      timeout,
      appendTo,
      maxWidth,
      zIndex,
      hideDelay,
      showDelay,
    } = this.props;

    // It's a best practice to create the HOC outside the render function,
    // mainly to improve the performance and prevent remounting that in some case could cause issues
    const EllipsedText = withEllipsedTooltip({
      showTooltip: true,
      tooltipProps: {
        className: tooltip.root,
        appendTo,
        flip,
        fixed,
        placement,
        timeout,
        maxWidth,
        zIndex,
        hideDelay,
        showDelay,
      },
    })(OriginalText);

    this.EllipsedText = EllipsedText;
  }

  render() {
    const {
      ellipsis,
      flip,
      fixed,
      placement,
      timeout,
      appendTo,
      maxWidth,
      zIndex,
      hideDelay,
      showDelay,
      ...props
    } = this.props;
    const { EllipsedText } = this;

    return ellipsis ? <EllipsedText {...props} /> : <OriginalText {...props} />;
  }
}

export default Text;
