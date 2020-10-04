import React from 'react';
import { withEllipsedTooltip } from 'wix-ui-core/dist/src/hocs/EllipsedTooltip';
import { ZIndex } from '../../ZIndex';
import tooltip from './EllipsisHOC.st.css';

export default React.forwardRef(({ Component, props }, ref) => {
  const {
    flip,
    fixed,
    placement,
    timeout,
    appendTo = 'window',
    maxWidth = 204,
    zIndex = ZIndex('Tooltip'),
    hideDelay,
    showDelay,
    ellipsis,
    showTooltip = true,
    ...rest
  } = props;

  const EllipsedComponent = withEllipsedTooltip({
    showTooltip,
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
  })(Component);

  return <EllipsedComponent ref={ref} {...rest} />;
});
