import styles from './Content.st.css';
import React, { useState, useCallback } from 'react';
import Divider from '../../../Divider';
import PropTypes from 'prop-types';
import ScrollableContainer from '../../../common/ScrollableContainer';
import { dataHooks } from '../../constants';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Content = props => {
  const {
    children,
    content = children,
    contentMaxHeight,
    contentHideDividers,
    onContentScrollPositionChanged,
  } = useBaseModalLayoutContext(props);

  const [scrollPosition, setScrollPosition] = useState('none');

  const handleScrollPositionChanged = useCallback(
    ({ position, target }) => {
      if (scrollPosition !== position.y) {
        if (!contentHideDividers) {
          setScrollPosition(position.y);
        }
        onContentScrollPositionChanged &&
          onContentScrollPositionChanged({ position, target });
      }
    },
    [contentHideDividers, onContentScrollPositionChanged, scrollPosition],
  );

  const getScrollPositionChangedHandler = useCallback(() => {
    return !contentHideDividers || !!onContentScrollPositionChanged
      ? { onScrollPositionChanged: handleScrollPositionChanged }
      : {};
  }, [
    contentHideDividers,
    handleScrollPositionChanged,
    onContentScrollPositionChanged,
  ]);

  const isTopDividerHidden = useCallback(
    () =>
      contentHideDividers ||
      scrollPosition === 'top' ||
      scrollPosition === 'none',
    [contentHideDividers, scrollPosition],
  );

  const isBottomDividerHidden = useCallback(
    () =>
      contentHideDividers ||
      scrollPosition === 'bottom' ||
      scrollPosition === 'none',
    [contentHideDividers, scrollPosition],
  );

  return (
    (content && (
      <div
        data-hook={dataHooks.content}
        data-hidedividers={contentHideDividers}
        {...styles(
          'root',
          {
            hideTopDivider: isTopDividerHidden(),
            hideBottomDivider: isBottomDividerHidden(),
          },
          props,
        )}
      >
        {!contentHideDividers && <Divider className={styles.topDivider} />}
        <ScrollableContainer
          dataHook={dataHooks.contentWrapper}
          className={styles.innerContent}
          maxHeight={contentMaxHeight}
          {...getScrollPositionChangedHandler()}
        >
          {content}
        </ScrollableContainer>
        {!contentHideDividers && <Divider className={styles.bottomDivider} />}
      </div>
    )) ||
    null
  );
};

Content.displayName = 'BaseModalLayout.Content';

Content.propTypes = {
  /** the content you want to render in the modal, children passed directly will be treated as `content` as well */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** the max-height for the modal content, will show a scrollbar if content exceeds */
  contentMaxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** hides the content scrolling dividers  */
  contentHideDividers: PropTypes.bool,
  /** Handler for changes in the content scroll position  */
  onContentScrollPositionChanged: PropTypes.func,
};

Content.defaultProps = {
  contentHideDividers: false,
};
