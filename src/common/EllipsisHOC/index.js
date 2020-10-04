import React from 'react';

import PropTypes from 'prop-types';

/**
 * Here we need to use loadable for now because React.lazy is
 * not supporting SSR yet.
 */
import loadable from '@loadable/component';
import { retry } from './utils';
import { getDisplayName } from '../hocUtils';

const validTooltipProps = [
  'flip',
  'fixed',
  'placement',
  'timeout',
  'appendTo',
  'maxWidth',
  'zIndex',
  'hideDelay',
  'showDelay',
  'showTooltip',
];

const omit = (props, remove) => {
  return Object.keys(props)
    .filter(prop => !remove.includes(prop))
    .reduce((res, key) => ({ ...res, [key]: props[key] }), {});
};

const fallbackEllipsis = {
  display: 'inline-block',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxWidth: '100%',
  verticalAlign: 'bottom',
  whiteSpace: 'noWrap',
};

const LazyEllipsisHOC = loadable(() =>
  retry(() =>
    import(/* webpackChunkName: "wsr-ellipsisHOC" */ './EllipsisHOC'),
  ),
);

const Comp /** @autodocs-component */ = Component => {
  const displayName = getDisplayName(Component);

  const Ellipsed = React.memo(
    React.forwardRef(({ ellipsis, ...props }, ref) => {
      const rest = omit(props, validTooltipProps);

      if (ellipsis) {
        return (
          <LazyEllipsisHOC
            ref={ref}
            fallback={
              <Component
                style={fallbackEllipsis}
                data-fallback
                ref={ref}
                {...rest}
              />
            }
            Component={Component}
            props={props}
          />
        );
      }

      return <Component ref={ref} {...rest} />;
    }),
  );

  Ellipsed.displayName = displayName;

  return Ellipsed;
};

Comp.propTypes = {
  /** should the text get ellipsed with tooltip, or should it get broken into lines when it reaches the end of its container */
  ellipsis: PropTypes.bool,
  /** `ellipsis` prop. Tooltip content calculation relation to a dom element. Can be either:
   *  `'window', 'scrollParent', 'viewport', 'parent'`, `element` or
   * `function` based predicate i.e. (elm) =>
   *  elm.getAttribute('data-hook') === 'value'
   */
  appendTo: PropTypes.oneOfType([
    PropTypes.oneOf(['window', 'scrollParent', 'viewport', 'parent']),
    PropTypes.element,
    PropTypes.func,
  ]),
  /** `ellipsis` prop. Whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element. */
  flip: PropTypes.bool,
  /** `ellipsis` prop. Whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary. */
  fixed: PropTypes.bool,
  /** `ellipsis` prop. Tooltip content placement in relation to target element */
  placement: PropTypes.string,
  /** `ellipsis` prop. Tooltip timeout value. */
  timeout: PropTypes.number,
  /** `ellipsis` prop. Tooltip content max width value. */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** `ellipsis` prop. Tooltip content zIndex. */
  zIndex: PropTypes.number,
  /** `ellipsis` prop. Tooltip hide delay. */
  hideDelay: PropTypes.number,
  /** `ellipsis` prop. Tooltip show delay. */
  showDelay: PropTypes.number,
  /** `ellipsis` prop. Whether to enable the tooltip when an ellipsis is necessary */
  showTooltip: PropTypes.bool,
};

export default Comp;
